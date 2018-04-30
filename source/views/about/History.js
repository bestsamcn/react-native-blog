import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'dva/mobile';

let arr = [];
for(let i=0; i<31; i++){
	arr.push(i);
}

let arr2 = [];
for(let i=0; i<12; i++){
	arr2.push(i);
}

@connect(state=>({...state}))
class History extends React.Component{
	constructor(props){
		super(props);
		this.state={
			list:arr,
			list2:arr2
		}
	}

	render(){
		return(
			<View>
				{this.state.list2.map(item=>(
					<View key={item} style={{flex:1, marginTop:11, justifyContent:'space-between', flexDirection:'row', flexWrap:'nowrap'}}>
						{this.state.list.map(oitem=>(
							<View key={oitem} style={{backgroundColor:'#1abc9c', width:10, height:10}}></View>
						))}
					</View>))}
			</View>
		)
	}
}
export default History;