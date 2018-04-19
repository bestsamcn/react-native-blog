import React from 'react';
import { View, NetInfo, ToastAndroid, BackHandler } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { About, Message, Splash } from '@/views';
import HomeStack from '@/views/home';
import { SearchResult, SearchIndex } from './views/search';
import WebScreen from '@/views/Webview';
import SplashScreen from 'react-native-splash-screen';
import { delay } from '@/utils';
import { connect } from 'dva/mobile';
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
			screen: About,
			navigationOptions:{
				title:'关于',
				tabBarIcon:({focused, tintColor})=>(
					<Icon name="font" size={20} color={focused ? "#1abc9c" : "#999"} />
				)
			}
		},
		MessageTab:{
			screen: Message,
			navigationOptions:{
				title:'留言',
				tabBarIcon:({focused, tintColor})=>(
					<Icon name="bold" size={20} color={focused ? "#1abc9c" : "#999"} />
				)
			}
		}
	},
	{
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
	            shadowOffset:{width:0, height:0},
	            shadowOpacity:0,

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
	}
)
@connect(state=>({...state}))
class Router extends React.Component{
	constructor(props){
		super(props);
	}
	async componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        await delay(500);
        await SplashScreen.hide();
    }
    componentWillMount(){
    	this.checkNetwork();
    	BackHandler.addEventListener('hardwareBackPress', this.onBackHandler.bind(this));
    }
    componentWillUnmount(){
    	BackHandler.removeEventListener('hardwareBackPress', this.onBackHandler.bind(this));
    }
    async checkNetwork(){
		let isConnected = await NetInfo.isConnected.fetch();
	    if(!isConnected){
	        return ToastAndroid.show('世界上最遥远的距离是什么？', 1000);
	    }
    }
    onBackHandler(){
    	if( this.lastBackPressTime && (Date.now() - this.lastBackPressTime < 2000)){
    		return BackHandler.exitApp();
    	}
    	this.lastBackPressTime = Date.now() ;
    	ToastAndroid.show('再点击一次退出', 2000);
    	return true;
    }
	render(){
		return(
			<MainNavigation />
		)
	}
}
export default Router;


export const routerReducer = (state, action={})=>{
	return MainNavigation.router.getStateForAction(action, state);
}