import React from 'react';
import { navigate } from 'react-navigation';
import { Button, View, Text, ListView, RefreshControl, TextInput, TouchableHighlight  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'dva/mobile';
import { Loading } from '@/components/common';
import { headerStyles } from '@/styles/home';
import { margin, color, font, flex } from '@/styles/base';

@connect(state=>({...state}))
class Home extends React.Component{
	static navigationOptions = ()=>({
		headerLeft:<Text style={headerStyles.logo}><Icon name='bold' style={margin.right5} size={30} color='#1abc9c'/>est</Text>,
		headerRight:<Icon name='search' style={margin.right10} size={20} color='#1abc9c'/>,
	})

	constructor(props){
		super(props);
		this.state = {
			loading:false
		}
	}
	onRefresh(){
		this.props.dispatch({type:'home/getArticleList', params:{}})
	}
	onScroll(scrollView){
		let contentHeight = scrollView.nativeEvent.contentSize.height;
		let offsetY = scrollView.nativeEvent.contentOffset.y;
		let viewHeight = scrollView.nativeEvent.layoutMeasurement.height;
		if(offsetY + viewHeight > contentHeight-10){
			this.setState({loading:true});
		}else{
			this.setState({loading:false});
		}
	}
	_renderFooter(){
		let { loading } = this.state;
		return <Loading animating={loading}/>
	}
	componentDidMount(){
		console.log(this)
	}
	componentWillMount(){
		this.props.dispatch({type:'home/getArticleList', params:{}})
	}
	navigate(article){
		console.log(article, 'ffffffffffff')
		this.props.navigation.navigate('web', { id: article._id});
	}
	_renderRow(item){
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
				</View>

			</TouchableHighlight>
		)
	}
	render(){
		let { articleList, loading } = this.props.home;
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return(
			<View>
				<ListView 
					pageSize={10} 
					enableEmptySections
					onScroll={this.onScroll.bind(this)} 
					dataSource={ds.cloneWithRows(articleList)} renderRow={this._renderRow.bind(this)} 
					refreshControl={
						<RefreshControl title="loading" refreshing={loading} onRefresh={this.onRefresh.bind(this)}/>
					}
					style={{marginTop:20}}
					renderFooter={this._renderFooter.bind(this)}
				/>
					
				
			</View>		
		)
	}
}
export default Home;
