import React from 'react';
import { StackNavigator, navigate } from 'react-navigation';
import { Button, View, Text } from 'react-native';
import { connect } from 'dva/mobile';

const _state = state=>{
	return {
		...state
	}
}
@connect(_state)
class Message extends React.Component{
	constructor(props){
		super(props);
	}
	pushState(){
		this.props.navigation.navigate('About')

	}
	render(){
		return(
			<View>
				<Text>Hello Message</Text>
				<Button title="About" onPress={this.pushState.bind(this)}/>
			</View>		
		)
	}
}
export default Message;
