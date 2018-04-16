import React, { Component } from 'react';
import { View, Input, TouchableHighlignt, Text } from 'react-native';
import { SearchHeader } from '@/components/layout/headers';
import { connect } from 'dva/mobile';

@connect(state=>({...state}))
class Search extends Component{
	static navigationOptions = SearchHeader
	constructor(props){
		super(props);
	}
	async componentWillMount(){
		let { hotwordList } = this.props.search;
		let { hotword } = await global.storage.load({key:'hotword'});
		console.log(hotword,'fsadfasdfas')
		if(hotword.length < 1){
			this.props.disaptch({type:'search/getHotwordList', params:{}});
		}
	}
	render(){
		let { hotwordList } = this.props.search;
		console.log(hotwordList, 'ffffffffff')
		return(
			<View>
				{hotwordList.map(item=>(
					<TouchableHighlignt key={item.id}><Text>{item.name}</Text></TouchableHighlignt>
				))}
			</View>	
		)
	}
}

export default Search;