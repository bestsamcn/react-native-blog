import React from 'react';
import { StackNavigator, navigate } from 'react-navigation';
import { Button, View, Text, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';
import { connect } from 'dva/mobile';
import { HomeHeader } from '@/components/layout/headers';
import { margin, color, font, flex, container, padding } from '@/styles/base';

const _state = state=>{
	return {
		...state
	}
}
@connect(_state)
class Message extends React.Component{
	static navigationOptions = HomeHeader;
	constructor(props){
		super(props);
	}
	pushState(){
		this.props.navigation.navigate('About')

	}
	onHeaderRightClick(){
		let { hotwordList } = this.props.search;
		let name = !!hotwordList && !!hotwordList[0] && hotwordList[0].name || HOT_WORD;
		this.props.navigation.navigate({routeName:'Search', params:{hotword:name}})

	}
	//活动或者点击屏幕键盘收起
	onStartShouldSetResponder(){
		Keyboard.dismiss();
	}
	componentDidMount(){
		this.props.navigation.onHeaderRightClick = this.onHeaderRightClick.bind(this);
	}
	render(){
		return(
			<View style={[container.view__, padding.a20]} onStartShouldSetResponder={this.onStartShouldSetResponder.bind(this)}>
				<View style={[margin.top20]} >
					<Text>Name</Text>
					<TextInput 
						style={{height:40, padding:10, marginTop:10, width:'100%', backgroundColor:'#eee', borderWidth:1, borderColor:'#1abc9c'}}
						underlineColorAndroid='transparent'
					/>	
				</View>
				<View style={[margin.top20]}>
					<Text>Email</Text>
					<TextInput 
						style={{height:40, padding:10, marginTop:10, width:'100%', backgroundColor:'#eee', borderWidth:1, borderColor:'#1abc9c'}}
						underlineColorAndroid='transparent'
					/>	
				</View>
				<View style={[margin.top20]}>
					<Text>Content</Text>
					<KeyboardAvoidingView  behavior="padding" >
						<TextInput 
							multiline={true}
							numberOfLines={4}
							style={{height:100, marginTop:10, width:'100%', backgroundColor:'#eee', borderWidth:1, borderColor:'#1abc9c'}}
							underlineColorAndroid='transparent'
						/>	
					</KeyboardAvoidingView>
				</View>
			</View>		
		)
	}
}
export default Message;
