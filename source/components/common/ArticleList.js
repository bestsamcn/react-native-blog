import React from 'react';
import { navigate } from 'react-navigation';
import { Button, View, Text, ListView, RefreshControl, TextInput, TouchableHighlight  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay';
import { Loading } from '@/components/common';
import { margin, color, font, flex, container } from '@/styles/base';
import * as $$ from '@/utils';
import { PAGE_SIZE } from '@/config';
import PropTypes from 'prop-types';

class ArticleList extends React.Component{
	static defaultProps = {
		onRefresh:null,
		onScroll:null,
		onEndReached:null,
		articleList:[],
		pageIndex:1,
		total:0,
		pageSize:PAGE_SIZE,
		onEndReachedThreshold:40,
		isMoring:false,
		isRefreshing:false,
	}
	static proptypes = {
		onRefresh:PropTypes.func,
		onScroll:PropTypes.func,
		onEndReached:PropTypes.func,
		articleList:PropTypes.array,
		pageIndex:PropTypes.number,
		total:PropTypes.number,
		pageSize:PropTypes.number,
		onEndReachedThreshold:PropTypes.number,
		isMoring:PropTypes.bool,
		isRefreshing:PropTypes.bool,
	}
	constructor(props){
		super(props);
		this.state = {
			loading:false,
			loadMore:false
		}
	}
	//刷新
	onRefresh(){
		let { isMoring, isRefreshing } = this.props;
		if(isMoring || isRefreshing) return;
		this.props.onRefresh && this.props.onRefresh();
	}
	//滚动
	onScroll(scrollView){
		this.props.onScroll && this.props.onScroll(scrollView);
	}
	//到达底部
	onEndReached(){
		this.props.onEndReached && this.props.onEndReached();
	}
	//渲染底部
	renderFooter(){
		let { isMoring, pageIndex, pageSize, total, isRefreshing } = this.props;
		if(!isRefreshing){
			if(pageIndex * pageSize < total){
				return <View style={[{width:'100%', height:40}, flex.center]}>
					<Loading />
					<Text style={{textAlign:'center', color:'#1abc9c', marginLeft:5}}>正在加载...</Text>
				</View>
			}else{
				return <View style={[{width:'100%', height:40}, flex.center]}>
					<Text style={{textAlign:'center', color:'#333'}}>没有更多了</Text>
				</View>
			}
		}

	}
	//导航
	navigate(article){
		if(!article) return;
		this.props.navigation.navigate('Web', { id: article._id, article});
	}
	//渲染行
	renderRow(item){
		return (
			<TouchableHighlight 
				style={{backgroundColor:'#fff', paddingHorizontal:20}} 
				activeOpacity={0.5} 
				underlayColor={color.green}  
				onPress={this.navigate.bind(this, item)}
			>
				<View style={{borderColor:'#eee', borderBottomWidth:1, borderStyle:'solid', paddingVertical:20}}>
					<Text style={[color.black, font.size14, font.bold]}>{item.title}</Text>
					{/* 标签 */}
					<View style={[margin.top10, flex.start]}>
						<View style={[margin.right10, flex.start]}>
							<Text style={[[margin.right5, font.size10], font.size11]}><Icon name="comment" style={{marginRight:20}} color="#bbb" size={13} /></Text>
							<Text style={[margin.right5, font.size10]}>{item.commentNum}</Text>
							<Text style={font.size11}>Comments</Text>
						</View>
						<View style={[margin.right10, flex.start]}>
							<Text style={[margin.right5, font.size10]}><Icon name="eye" style={{marginRight:20}} color="#bbb" size={13} /></Text>
							<Text style={[margin.right5, font.size10]}>{item.readNum}</Text>
							<Text style={font.size11}>Views</Text>
						</View>
						<View style={[margin.right10, flex.start]}>
							<Text style={[margin.right5, font.size10]}><Icon name="tag" style={{marginRight:20}} color="#bbb" size={13} /></Text>
							<Text style={font.size11}>{item.tag ? item.tag.name : 'null'}</Text>
						</View>
					</View>
					<Text style={[margin.top10, color.black1, font.size12]}>摘要：{$$.textEllipsis(item.previewText, 36, true)}</Text>
					<View style={[margin.top10, flex.start]}>
						<View style={margin.right10}>
							<Text style={{borderRadius:2, paddingVertical:2, paddingHorizontal:4, borderStyle:'solid', borderColor:'#1abc9c', borderWidth:1, color:'#1abc9c', fontSize:10}}>{item.category ? item.category.name :'我可能被删了'}</Text>
						</View>
						<View style={[margin.right10, flex.start]}>
							<Text style={[margin.right5, font.size10]}><Icon name="calendar" style={{marginRight:20}} color="#bbb" size={13} /></Text>
							<Text style={font.size11}>{$$.dateFormat(item.createTime, 'yyyy-mm-dd')}</Text>
						</View>
						<View style={[margin.right10, flex.start]}>
							<Text style={[margin.right5, font.size10]}><Icon name="edit" style={{marginRight:20}} color="#bbb" size={13} /></Text>
							<Text style={font.size11}>{$$.dateFormat(item.lastEditTime, 'yyyy-mm-dd')}</Text>
						</View>
					</View>
				</View>

			</TouchableHighlight>
		)
	}
	
	render(){
		let { articleList, isRefreshing, pageSize, onEndReachedThreshold } = this.props;
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return(
			<View style={{width:'100%', height:'100%'}}>
				<ListView 
					pageSize={pageSize} 
					enableEmptySections
					onScroll={this.onScroll.bind(this)} 
					dataSource={ds.cloneWithRows(articleList)} 
					renderRow={this.renderRow.bind(this)}
					refreshControl={
						<RefreshControl title="loading" colors={['#1abc9c']} refreshing={isRefreshing} onRefresh={this.onRefresh.bind(this)}/>
					}
					onEndReachedThreshold={onEndReachedThreshold}
					onEndReached={this.onEndReached.bind(this)}
					renderFooter={this.renderFooter.bind(this)}
				/>
			</View>
		)
	}
}
export default ArticleList;
