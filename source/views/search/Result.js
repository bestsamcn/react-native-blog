import React from 'react';
import { navigate } from 'react-navigation';
import { Button, View, Text, ListView, RefreshControl, TextInput, TouchableHighlight  } from 'react-native';
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
	onRefresh(){
		let { isMoring, isRefreshing } = this.props.search;
		if(isMoring || isRefreshing) return;
		this.props.dispatch({type:'search/getArticleList', params:{isRefresh:true}});
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
	onEndReached(){
		let { isMoring, isRefreshing } = this.props.search;
		if(isMoring || isRefreshing) return;
		this.props.dispatch({type:'search/getArticleList', params:{}})
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
					refreshing={isRefreshing}
					isMoring={isMoring}
					onEndReached={this.onEndReached.bind(this)}
				/>
			</View>		
		)
	}
}
export default Result;
