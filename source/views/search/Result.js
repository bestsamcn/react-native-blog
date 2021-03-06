import React from 'react';
import { navigate } from 'react-navigation';
import { Button, View, Text, ListView, RefreshControl, TextInput, TouchableHighlight, Keyboard  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'dva/mobile';
import { Loading, ArticleList } from '@/components/common';
import { ResultHeader } from '@/components/layout/headers';
import { margin, color, font, flex, container } from '@/styles/base';
import * as $$ from '@/utils';

@connect(state=>({...state}))
class Result extends React.Component{
	static navigationOptions = ResultHeader;
	constructor(props){
		super(props);
		this.state = {
			loading:false,
			loadMore:false
		}
	}
	//刷新
	onRefresh(){
		let { isMoring, isRefreshing } = this.props.search;
		if(isMoring || isRefreshing) return;
		this.props.dispatch({type:'search/getArticleList', params:{isRefresh:true}});
	}
	//滚动
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
	//获取头部输入的字符
	onTextOk(keyword){
		Keyboard.dismiss();
		this.props.dispatch({type:'search/setKeyword', params:{keyword}});
	}
	componentDidMount(){
		this.props.navigation.onTextOk = this.onTextOk.bind(this);
	}
	componentWillUnmount(){
		this.props.dispatch({type:'search/setState', payload:{articleList:[], pageIndex:1, total:11, keyword:''}});
	}
	//滚动底部回调
	onEndReached(){
		let { isMoring, isRefreshing } = this.props.search;
		if(isMoring || isRefreshing) return;
		this.props.dispatch({type:'search/getArticleList', params:{}});
	}
	
	render(){
		let { articleList, isRefreshing, isMoring, total, pageIndex } = this.props.search;
		let { isLoading } = this.props.global;
		let { navigation } = this.props;
		return(
			<View style={[container.view___]}>
				<ArticleList 
					navigation={navigation}
					total={total}
					pageIndex={pageIndex}
					onScroll={this.onScroll.bind(this)} 
					articleList={articleList} 
					onRefresh={this.onRefresh.bind(this)}
					isRefreshing={isRefreshing}
					isMoring={isMoring}
					onEndReached={this.onEndReached.bind(this)}
				/>
			</View>		
		)
	}
}
export default Result;
