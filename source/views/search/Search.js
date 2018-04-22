import React, { Component } from 'react';
import { View, Input, TouchableHighlight, Text, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchHeader } from '@/components/layout/headers';
import { connect } from 'dva/mobile';
import { container, bg, color, font, margin, padding, flex } from '@/styles/base';

@connect(state=>({...state}))
class Search extends Component{
	static navigationOptions = SearchHeader;
	constructor(props){
		super(props);
	}
	async componentWillMount(){
		let { hotwordList } = this.props.search;
		let { hotword } = await global.storage.load({key:'hotword'});
		if(!hotword || !hotword.length){
			this.props.dispatch({type:'search/getHotwordList', params:{}});
		}
	}
	//获取头部输入的字符
	onTextOk(keyword){
		this.props.dispatch({type:'search/setKeyword', params:{keyword}});
	}
	componentDidMount(){
		this.props.navigation.onTextOk = this.onTextOk.bind(this);
	}
	//活动或者点击屏幕键盘收起
	onStartShouldSetResponder(){
		Keyboard.dismiss();
	}
	//清除搜索记录
	clearKeyword(){
		this.props.dispatch({type:'search/clearKeyword', params:{}});
	}
	render(){
		let { hotwordList, keywordList } = this.props.search;
		return(
			<View style={[container.view, bg.white]} onStartShouldSetResponder={this.onStartShouldSetResponder.bind(this)}>
				{!!hotwordList && !!hotwordList.length &&<View style={[margin.top20, padding.h10]}>
					<Text style={[color.black, font.size14]}><Icon name="fire" color="#2b4356"/>热门搜索：</Text>
				</View>}
				<View style={[flex.start, padding.a10, {flexWrap:'wrap'}]}>
					{!!hotwordList && !!hotwordList.length && hotwordList.map(item=>(
						<TouchableHighlight 
							key={item._id} 
							onPress={this.onTextOk.bind(this, item.name)}
							activeOpacity={0.5}
							underlayColor="#fff"
							style={[margin.right10, margin.top10]}
						>
							<Text style={[font.size11, padding.v5, padding.h10, {borderColor:'#ddd', borderWidth:1, borderRadius:3}]}>
								{item.name}
							</Text>
						</TouchableHighlight>
					))}
				</View>
				{!!keywordList && !!keywordList.length && <View style={[margin.top20, padding.h10, {position:'relative'}]}>
					<Text style={[color.black, font.size14]}><Icon name="fire" color="#2b4356"/>搜索记录：</Text>
					<TouchableHighlight 
						onPress={this.clearKeyword.bind(this)} 
						style={{padding:4, position:'absolute', top:0, right:10}}
						activeOpacity={0.5}
						underlayColor="#fff"
					>
						<Icon name="trash" size={14} color="#bbb" />
					</TouchableHighlight>
				</View>}
				<View style={[flex.start, padding.a10, {flexWrap:'wrap'}]}>
					{!!keywordList && !!keywordList.length && keywordList.map((item, index)=>(
						<TouchableHighlight 
							key={index} 
							activeOpacity={0.5}
							underlayColor="#fff"
							onPress={this.onTextOk.bind(this, item)} 
							style={[margin.right10, margin.top10]}
						>
							<Text style={[font.size11, padding.v5, padding.h10, {borderColor:'#ddd', borderWidth:1, borderRadius:3}]}>
								{item}
							</Text>
						</TouchableHighlight>
					))}
				</View>
			</View>	
		)
	}
}

export default Search;