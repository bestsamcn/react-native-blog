import React from 'react';
import { navigate } from 'react-navigation';
import { Button, View, Text, ListView, RefreshControl, TextInput, TouchableHighlight  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'dva/mobile';
import { Loading, ArticleList } from '@/components/common';
import { headerStyles } from '@/styles/home';
import { HomeHeader } from '@/components/layout/headers';
import { margin, color, font, flex, container } from '@/styles/base';
import * as $$ from '@/utils';
import { HOT_WORD } from '@/config';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';

@connect(state=>({...state}))
class Home extends React.Component{
	static navigationOptions = HomeHeader;
	constructor(props){
		super(props);
		this.state = {
			loading:false,
			loadMore:false,
			isVisibleTabView:false
		}
	}
	onRefresh(currentTabIndex){
		let { tabList } = this.props.home;
		if(tabList[currentTabIndex].isMoring || tabList[currentTabIndex].isRefreshing) return;
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
	onHeaderRightClick(){
		let { hotwordList } = this.props.search;
		let name = !!hotwordList && !!hotwordList[0] && hotwordList[0].name || HOT_WORD;
		this.props.navigation.navigate({routeName:'Search', params:{hotword:name}})

	}
	componentDidMount(){
		this.props.navigation.onHeaderRightClick = this.onHeaderRightClick.bind(this);
		this.timer = setTimeout(()=>{
			this.setState({isVisibleTabView:true});
		}, 500);
	}
	onEndReached(currentTabIndex){
		let { tabList } = this.props.home;
		if(tabList[currentTabIndex].isMoring || tabList[currentTabIndex].isRefreshing) return;
		this.props.dispatch({type:'home/getTabArticleList', params:{currentTabIndex}});
	}
	onChangeTab(tab){
		let { i } = tab;
		let { tabList } = this.props.home;
		!tabList[i].articleList.length && this.props.dispatch({type:'home/getTabArticleList', params:{isRefresh:true, currentTabIndex:i}})
	}
	async componentWillMount(){
		let { tabList, currentTabIndex } = this.props.home;
		if(tabList[currentTabIndex].isMoring || tabList[currentTabIndex].isRefreshing) return;
		this.props.dispatch({type:'home/getTabArticleList', params:{isRefresh:true, currentTabIndex}});
	}
	componentWillUnmount(){
		console.log('unmount')
		this.timer && clearTimeout(this.timer);
	}
	render(){
		let { currentTabIndex, tabList } = this.props.home;
		let { isLoading } = this.props.global;
		let { navigation } = this.props;
		return(
			<ScrollableTabView
				tabBarUnderlineStyle={{marginBottom:-1, zIndex:1000, backgroundColor:'#1abc9c', borderRadius:4}}
				tabBarActiveTextColor="#1abc9c"
			    style={{backgroundColor:'#fff'}}
			    initialPage={currentTabIndex}
			    onChangeTab={this.onChangeTab.bind(this)}
			    renderTabBar={() => <ScrollableTabBar  />}
			 >
			 	{!!tabList.length && tabList.map((item, index)=>(
		    		<View key={index} tabLabel={item.category}>
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
		    		</View>
			 	))}
		    	
		  </ScrollableTabView>	
		)
	}
}
export default Home;
