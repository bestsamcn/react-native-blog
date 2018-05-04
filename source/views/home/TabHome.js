import React from 'react';
import { navigate } from 'react-navigation';
import { Button, View, Text, ListView, RefreshControl, TextInput, TouchableHighlight, Animated, Easing  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'dva/mobile';
import { Loading, ArticleList, ScrollTabBar } from '@/components/common';
import { headerStyles } from '@/styles/home';
import { HomeHeader } from '@/components/layout/headers';
import { margin, color, font, flex, container } from '@/styles/base';
import * as $$ from '@/utils';
import { HOT_WORD } from '@/config';
import ScrollableTabView from 'react-native-scrollable-tab-view';

@connect(state=>({...state}))
class Home extends React.Component{
	static navigationOptions = HomeHeader;
	constructor(props){
		super(props);
		this.state = {
			loading:false,
			loadMore:false,
			isVisibleTabView:false,
			opacity0:new Animated.Value(0),
			opacity1:new Animated.Value(0),
			opacity2:new Animated.Value(0),
			opacity3:new Animated.Value(0),
			opacity4:new Animated.Value(0),
			opacity5:new Animated.Value(0),
			opacity6:new Animated.Value(0),
			opacity7:new Animated.Value(0),
			opacity8:new Animated.Value(0),
			opacity9:new Animated.Value(0),
		}
	}
	//刷新
	onRefresh(currentTabIndex){
		let { tabCategoryArticleList } = this.props.home;
		if(!tabCategoryArticleList.length || (tabCategoryArticleList[currentTabIndex].isMoring || tabCategoryArticleList[currentTabIndex].isRefreshing)) return;
		this.props.dispatch({type:'home/getTabArticleList', params:{isRefresh:true, currentTabIndex}});
	}
	onScroll(scrollView){
		let contentHeight = scrollView.nativeEvent.contentSize.height;
		let offsetY = scrollView.nativeEvent.contentOffset.y;
		let viewHeight = scrollView.nativeEvent.layoutMeasurement.height;
		if(offsetY + viewHeight > contentHeight-10){
			this.setState({loadMore:true});
		}else{
			this.setState({loadMore:false});
		}
	}
	//搜索
	onHeaderRightClick(){
		let { hotwordList } = this.props.search;
		let name = !!hotwordList && !!hotwordList[0] && hotwordList[0].name || HOT_WORD;
		this.props.navigation.navigate({routeName:'Search', params:{hotword:name}})

	}
	//获取头部高度，作为全局初始值
	onHeaderLayout({ height }){
		this.props.dispatch({type:'global/setState', payload:{headerHeight:height}});
	}
	componentDidMount(){
		this.props.navigation.onHeaderRightClick = this.onHeaderRightClick.bind(this);
		this.props.navigation.onHeaderLayout = this.onHeaderLayout.bind(this);
		this.timer = setTimeout(()=>{
			this.setState({isVisibleTabView:true});
		}, 500);
	}
	//加载
	onEndReached(currentTabIndex){
		let { tabCategoryArticleList } = this.props.home;
		console.log(currentTabIndex, 'currentTabIndexcurrentTabIndex')
		if(tabCategoryArticleList[currentTabIndex].isMoring || tabCategoryArticleList[currentTabIndex].isRefreshing) return;
		this.props.dispatch({type:'home/getTabArticleList', params:{currentTabIndex}});
	}
	//滑动
	onChangeTab(tab){
		let { i } = tab;
		let { tabCategoryArticleList } = this.props.home;
		this.props.dispatch({type:'home/setState', payload:{currentTabIndex:i}});
		!!tabCategoryArticleList.length && !tabCategoryArticleList[i].articleList.length && 
		this.props.dispatch({type:'home/getTabArticleList', params:{isRefresh:true, currentTabIndex:i, callback(){
			// Animated.timing(this.state['opacity'+i], {
			// 	toValue:1,
			// 	duration:300,
			// 	easing:Easing.linear
			// }).start();
		}}});
	}
	async componentWillMount(){
		try{
			let { tabCategoryArticleList } = await global.storage.load({key:'tabCategoryArticleList'});
			(!tabCategoryArticleList || !tabCategoryArticleList.length || !tabCategoryArticleList[0].articleList.length ) && this.onRefresh(0);;
		}catch(e){
			this.onRefresh(0);
		}
		
	}
	componentWillReceiveProps(nextProps){
		// if(this.props.home.tabCategoryArticleList.length != this.state.opacity.length){
		// 	console.log(this.props.home.tabCategoryArticleList.length, this.state.opacity.length)
		// 	this.state.opacity.length =0;
		// 	this.props.home.tabCategoryArticleList.map((item, index)=>{
		// 		this.state.opacity.push(index);
		// 		let obj = {};
		// 		obj['opacity'+index] = new Animated.Value(0)
		// 		this.setState(obj)
		// 	});
		// 	console.log(this.state)
		// 	this.setState(opacity);
		// }
	}
	componentWillUnmount(){
		this.timer && clearTimeout(this.timer);
	}
	render(){
		let { currentTabIndex, tabCategoryArticleList } = this.props.home;
		let { isLoading } = this.props.global;
		let { navigation } = this.props;
		let { isVisibleTabView } = this.state;
		return(
			<ScrollableTabView
				tabBarUnderlineStyle={{marginBottom:-1, zIndex:1000, backgroundColor:'#1abc9c', borderRadius:4}}
				tabBarActiveTextColor="#1abc9c"
			    style={{backgroundColor:'#fff'}}
			    initialPage={currentTabIndex}
			    onChangeTab={this.onChangeTab.bind(this)}
			    renderTabBar={() => <ScrollTabBar />}
			 >
			 	{!!tabCategoryArticleList.length && isVisibleTabView && tabCategoryArticleList.map((item, index)=>(
		    		<Animated.View style={{opacity:1}} key={index} tabLabel={item.category}>
		    			<ArticleList 
							navigation={navigation}
							total={item.total}
							pageIndex={item.pageIndex}
							onScroll={this.onScroll.bind(this)} 
							articleList={item.articleList} 
							onRefresh={this.onRefresh.bind(this, index)}
							isRefreshing={item.isRefreshing}
							isMoring={item.isMoring}
							onEndReached={this.onEndReached.bind(this, index)}
						/>
		    		</Animated.View>
			 	))}
		  	</ScrollableTabView>
		)
	}
}
export default Home;
