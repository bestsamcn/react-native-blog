import React from 'react';
import { View, NetInfo, ToastAndroid, BackHandler } from 'react-native';
import { StackNavigator, TabNavigator, addNavigationHelpers, NavigationActions, TabBarBottom } from 'react-navigation';
import { initializeListeners, createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Splash } from '@/views';
import HomeStack from '@/views/home';
import MessageStack from '@/views/message';
import AboutStack from '@/views/about';
import { SearchResult, SearchIndex } from './views/search';
import WebScreen from '@/views/Webview';
import SplashScreen from 'react-native-splash-screen';
import { delay } from '@/utils';
import { connect } from 'dva/mobile';
import { TabBarComponent } from '@/components/common';
import { getCategoryList } from '@/services/global';

const TabNavigation = TabNavigator(
	{
		HomeTab:{
			screen: HomeStack,
			navigationOptions:{
				title:'首页',
				tabBarIcon:({focused, tintColor})=>(
					<Icon name="header" size={20} color={focused ? "#1abc9c" : "#999"} />
				),
				header:null
			}
		},
		AboutTab:{
			screen: AboutStack,
			navigationOptions:{
				title:'关于',
				tabBarIcon:({focused, tintColor})=>(
					<Icon name="font" size={20} color={focused ? "#1abc9c" : "#999"} />
				)
			}
		},
		MessageTab:{
			screen: MessageStack,
			navigationOptions:{
				title:'留言',
				tabBarIcon:({focused, tintColor})=>(
					<Icon name="bold" size={20} color={focused ? "#1abc9c" : "#999"} />
				)
				
			}
		}
	},
	{
		initialRouteName:'HomeTab',
		tabBarComponent:TabBarComponent,
		animationEnabled: false,
		swipeEnabled:false,
		tabBarPosition:'bottom',
		backBehavior:false,
        mode: 'modal',
        lazy:false,
        tabBarOptions: {
        	pressColor:'#333',
        	pressOpacity:0.8,
	        activeTintColor: '#1abc9c', // 文字和图片选中颜色
	        inactiveTintColor: '#999', // 文字和图片默认颜色
	        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
	        indicatorStyle: {height: 1}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
	        style: {
	            backgroundColor: '#fff', // TabBar 背景色
	            height:50,
	            borderStyle:'solid',
	            borderTopColor:'#f1f1f1',
	            borderTopWidth:1,
				elevation: 0,
	        },
	        labelStyle: {
	            fontSize: 12, // 文字大小,
	            marginTop: 0
	        }
	    }
	}
)

const MainNavigation = StackNavigator(
	{
		Tab:{
			screen:TabNavigation,
			navigationOptions:()=>({
				header:null
			})
		},
		Web:{
			screen:WebScreen,
			path:'webview/:id', 
		},
		Splash:{
			screen:Splash
		},
		Search:{
			screen:SearchIndex
		},
		Result:{
			screen:SearchResult
		}
	},
	{
		initialRouteName:'Tab',
		mode: 'modal',
		navigationOptions:{
			headerStyle:{
	            borderBottomWidth:1, 
			    elevation: 0,
			    borderStyle:'solid',
			    borderBottomColor:'#f6f6f6'
	        }
		}
	}
)
@connect(({ router }) => ({ router }))
class Router extends React.Component{
	constructor(props){
		super(props);
	}
	async componentDidMount() {
        initializeListeners('root', this.props.router);
        
		//有网
		try{

			//请求
			let { data } = await getCategoryList();
			this.props.dispatch({type:'global/getCategoryList', params:{data}});
			await delay(500);
	        await SplashScreen.hide();

	    //无网
		}catch(e){

			//缓存
			try{
				let { tabCategoryArticleList } = await global.storage.load({key:'tabCategoryArticleList'});
				this.props.dispatch({type:'global/getCategoryList', params:{data:tabCategoryArticleList}});
				await delay(500);
		        await SplashScreen.hide();
			//空
			}catch(e){
				this.props.dispatch({type:'global/getCategoryList', params:{data:[]}});
				await delay(500);
		        await SplashScreen.hide();
			}
		}
    }
    componentWillMount(){
    	this.checkNetwork();
    	BackHandler.addEventListener('hardwareBackPress', this.onBackHandler.bind(this));
    }
    componentWillUnmount(){
    	BackHandler.removeEventListener('hardwareBackPress', this.onBackHandler.bind(this));
    }
    //查看网络信息
    async checkNetwork(){
		let isConnected = await NetInfo.isConnected.fetch();
	    if(!isConnected){
	        return ToastAndroid.show('世界上最遥远的距离是什么？', 1000);
	    }
    }
    //返回键控制
    onBackHandler(){
    	const currentScreen = this.getCurrentScreen(this.props.router);

	    if (currentScreen !== 'TabHome' && currentScreen !== 'About' && currentScreen !== 'Message' && currentScreen !== 'Info') {
	      	this.props.dispatch(NavigationActions.back())
	      	return true
	    }
	    if(this.lastBackPressTime && (Date.now() - this.lastBackPressTime < 2000)){
    		return false;
    	}
    	this.lastBackPressTime = Date.now() ;
    	ToastAndroid.show('再点击一次退出', 2000);
    	return true;
    }
    //获取当前页面
    getCurrentScreen(navigationState) {
	  	if (!navigationState) {
	    	return null
	  	}
	  	const route = navigationState.routes[navigationState.index]
	  	if (route.routes) {
	   		return this.getCurrentScreen(route);
	  	}
	  	return route.routeName;
	}
	render(){
		let { dispatch, router } = this.props;
		const addListener = createReduxBoundAddListener('root');
		let navigation = addNavigationHelpers({dispatch, state:router, addListener});
		return(
			<MainNavigation navigation={navigation} />
		)
	}
}
export default Router;

export const routerMiddleware = createReactNavigationReduxMiddleware(
	'root',
	state => state.router
)
const defaultGetStateForAction = MainNavigation.router.getStateForAction;
MainNavigation.router.getStateForAction = (action, state) => {
	if (action.type === NavigationActions.NAVIGATE) {
		const { routeName, params } = action;
		const lastRoute = state.routes[state.routes.length - 1];

		//解决快速点击导致重复跳转的问题
		if (routeName === lastRoute.routeName && JSON.stringify(params) === JSON.stringify(lastRoute.params)) {
			return { ...state };
		}
	}
	return defaultGetStateForAction(action, state);
};
export const routerReducer = (state, action = {}) => {
	return MainNavigation.router.getStateForAction(action, state);
}

