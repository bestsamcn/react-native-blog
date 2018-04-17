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
		if(hotword.length < 1){
			this.props.disaptch({type:'search/getHotwordList', params:{}});
		}
	}
	onStartShouldSetResponder(){
		Keyboard.dismiss();
	}
	render(){
		let { hotwordList } = this.props.search;
		console.log(hotwordList, 'ffffffffff')
		return(
			<View style={[container.view, bg.white]} onStartShouldSetResponder={this.onStartShouldSetResponder.bind(this)}>
				<View style={[margin.top20, padding.h10]}>
					<Text style={[color.black, font.size14]}><Icon name="fire" color="#2b4356"/>热门搜索：</Text>
				</View>
				<View style={[flex.start, padding.a10, {flexWrap:'wrap'}]}>
					{hotwordList.map(item=>(
						<TouchableHighlight key={item._id} style={[margin.right10, margin.top10]}><Text style={[font.size11, padding.v5, padding.h10, {borderColor:'#ddd', borderWidth:1, borderRadius:3}]}>{item.name}</Text></TouchableHighlight>
					))}
				</View>
				<View style={[margin.top20, padding.h10]}>
					<Text style={[color.black, font.size14]}><Icon name="fire" color="#2b4356"/>搜索记录：</Text>
				</View>
				<View>
				</View>
			</View>	
		)
	}
}

export default Search;