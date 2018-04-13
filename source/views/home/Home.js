import React from 'react';
import { navigate } from 'react-navigation';
import { Button, View, Text, ListView, RefreshControl, TextInput, TouchableHighlight  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'dva/mobile';
import { Loading } from '@/components/common';
import { headerStyles } from '@/styles/home';
import { margin, color, font, flex, container } from '@/styles/base';
import * as $$ from '@/utils';

@connect(state=>({...state}))
class Home extends React.Component{
	static navigationOptions = (navigation)=>({
		headerLeft:<View style={[flex.startBaseline, headerStyles.logo]}><Icon name='bold' style={margin.right5} size={26} color='#1abc9c'/><Text style={font.size18}>est</Text></View>,
		headerRight:<TouchableHighlight underlayColor={color.green} activeOpacity={0.5}><Icon name='search' style={margin.right10} size={24} color='#1abc9c'/></TouchableHighlight>,
	})

	constructor(props){
		super(props);
		this.state = {
			loading:false,
			loadMore:false
		}
	}
	onRefresh(){
		let { isMoring, isRefreshing } = this.props.home;
		if(isMoring || isRefreshing) return;
		this.props.dispatch({type:'home/getArticleList', params:{isRefresh:true}});
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
		let { isMoring, isRefreshing } = this.props.home;
		if(isMoring || isRefreshing) return;
		this.props.dispatch({type:'home/getArticleList', params:{}})
	}
	renderFooter(){
		let { isMoring, pageIndex, pageSize, total } = this.props.home;
		if(isMoring){
			return <View style={[{width:'100%', height:40}, flex.center]}><Loading /></View>
		}else if(pageIndex * pageSize >= total){
			return <View style={[{width:'100%', height:40}, flex.center]}><Text style={{textAlign:'center', color:'#333'}}>没有更多了</Text></View>
		}
		
	}
	async componentWillMount(){
		let articleList = await global.storage.load({key:'articleList'});
		console.log(articleList, 'asdfasdfas')
		!articleList.length && this.props.dispatch({type:'home/getArticleList', params:{isRefresh:true}});
	}
	navigate(article){
		if(!article) return;
		this.props.navigation.navigate('web', { id: article._id});
	}
	renderRow(item){
		return (
			<TouchableHighlight 
				style={{backgroundColor:'#fff', paddingHorizontal:20}} 
				activeOpacity={0.5} 
				underlayColor={color.green}  
				onPress={this.navigate.bind(this, item)}
			>
				<View style={{borderColor:'#eee', borderBottomWidth:1, borderStyle:'solid', paddingVertical:20}}>
					<Text style={[color.black, font.size18, font.bold]}>{item.title}</Text>
					{/* 标签 */}
					<View style={[margin.top10, flex.start]}>
						<View style={[margin.right30, flex.start]}>
							<Text style={margin.right5}><Icon name="comment" style={{marginRight:20}} color="#bbb" size={14} /></Text>
							<Text style={margin.right5}>{item.commentNum}</Text>
							<Text>Comments</Text>
						</View>
						<View style={[margin.right30, flex.start]}>
							<Text style={margin.right5}><Icon name="eye" style={{marginRight:20}} color="#bbb" size={14} /></Text>
							<Text style={margin.right5}>{item.readNum}</Text>
							<Text>Comments</Text>
						</View>
						<View style={[margin.right30, flex.start]}>
							<Text style={margin.right5}><Icon name="tag" style={{marginRight:20}} color="#bbb" size={14} /></Text>
							<Text>{item.tag ? item.tag.name : 'null'}</Text>
						</View>
					</View>
					<Text style={[margin.top10, color.black1, font.size16]}>摘要：{item.previewText}</Text>
					<View style={[margin.top10, flex.start]}>
						<View style={margin.right10}>
							<Text style={{borderRadius:2, paddingVertical:2, paddingHorizontal:4, borderStyle:'solid', borderColor:'#1abc9c', borderWidth:1, color:'#1abc9c', fontSize:12}}>{item.category ? item.category.name :'我可能被删了'}</Text>
						</View>
						<View style={[margin.right10, flex.start]}>
							<Text style={margin.right5}><Icon name="calendar" style={{marginRight:20}} color="#bbb" size={14} /></Text>
							<Text>{$$.dateFormat(item.createTime, 'yyyy-mm-dd')}</Text>
						</View>
						<View style={[margin.right10, flex.start]}>
							<Text style={margin.right5}><Icon name="edit" style={{marginRight:20}} color="#bbb" size={14} /></Text>
							<Text>{$$.dateFormat(item.lastEditTime, 'yyyy-mm-dd')}</Text>
						</View>
					</View>
				</View>

			</TouchableHighlight>
		)
	}
	render(){
		let { articleList, isRefreshing } = this.props.home;
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return(
			<View>
				<ListView 
					pageSize={10} 
					enableEmptySections
					onScroll={this.onScroll.bind(this)} 
					dataSource={ds.cloneWithRows(articleList)} renderRow={this.renderRow.bind(this)} 
					refreshControl={
						<RefreshControl title="loading" refreshing={isRefreshing} onRefresh={this.onRefresh.bind(this)}/>
					}
					onEndReachedThreshold={20}
					onEndReached={this.onEndReached.bind(this)}
					style={{marginTop:20}}
					renderFooter={this.renderFooter.bind(this)}
				/>
					
				
			</View>		
		)
	}
}
export default Home;
