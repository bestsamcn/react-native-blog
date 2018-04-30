import React from 'react';
import { StackNavigator, navigate } from 'react-navigation';
import { Button, View, Text, TextInput, KeyboardAvoidingView, Keyboard, TouchableHighlight, AndroidToast, Dimensions } from 'react-native';
import { connect } from 'dva/mobile';
import { FullLoading } from '@/components/common';
import { HomeHeader } from '@/components/layout/headers';
import { margin, color, font, flex, container, padding, bg } from '@/styles/base';

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
		this.state={
			name:'',
			email:'',
			content:'',
			marginBottom:0
		}
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
	componentWillUnmount () {
	    this.keyboardDidHideListener.remove();
	}
	_keyboardDidHide(){
		this.setState({
			marginBottom:0
		})
	}
	componentWillMount () {
	    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
	}
	componentDidMount(){
		this.props.navigation.onHeaderRightClick = this.onHeaderRightClick.bind(this);
	}
	//提交信息
	onPostMesssage(){
		let { name, email, content } = this.state;
		if(!name || !email || !content){
			return AndroidToast.show('请填写完整信息', 1000);
		}
		this.props.dispatch({type:'message/addMessage', params:{...this.state, callback:()=>{
			this.setState({name:'', email:'', content:''});
		}}});
	}
	//设置输入文本
	setInputValue(type, value){
		let obj = {};
		obj[type] = value
		this.setState(obj);
	}
	onTextInputFocus(){
		this.setState({
			marginBottom:100
		})
	}
	onTextInputonBlur(){
		this.setState({
			marginBottom:0
		})
	}
	render(){
		let { name, email, content, marginBottom } = this.state;
		let { isLoading } = this.props.message;
		let { keybordHeight } = this.props.global;
		return(
			<KeyboardAvoidingView behavior="padding" style={[container.view__, padding.a20, {position:'relative', bottom:marginBottom}]} onStartShouldSetResponder={this.onStartShouldSetResponder.bind(this)}>
				{isLoading && <FullLoading type='30'/>}
				<View style={[margin.top20]} >
					<Text>Name</Text>
					<TextInput 
						style={{height:40, padding:10, marginTop:10, width:'100%', backgroundColor:'#eee', borderWidth:1, borderColor:'#1abc9c'}}
						underlineColorAndroid='transparent'
						value={name}
						onChangeText ={this.setInputValue.bind(this, 'name')}
					/>	
				</View>
				<View style={[margin.top20]}>
					<Text>Email</Text>
					<TextInput 
						value={email}
						style={{height:40, padding:10, marginTop:10, width:'100%', backgroundColor:'#eee', borderWidth:1, borderColor:'#1abc9c'}}
						underlineColorAndroid='transparent'
						onChangeText ={this.setInputValue.bind(this, 'email')}
					/>	
				</View>
				<View style={[margin.top20]}>
					<Text>Content</Text>
					<KeyboardAvoidingView  behavior="padding" >
						<TextInput 
							onChangeText ={this.setInputValue.bind(this, 'content')}
							value={content}
							multiline={true}
							onFocus={this.onTextInputFocus.bind(this)}
							onBlur={this.onTextInputonBlur.bind(this)}
							numberOfLines={4}
							style={{height:40, marginTop:10, width:'100%', backgroundColor:'#eee', borderWidth:1, borderColor:'#1abc9c'}}
							underlineColorAndroid='transparent'
						/>	
					</KeyboardAvoidingView>
				</View>
				<TouchableHighlight 
					underlayColor="#1abc9c" 
					activeOpacity={0.5} 
					onPress={this.onPostMesssage.bind(this)}
					style={[margin.top20, {width:'100%', height:40, marginBottom:keybordHeight}]}
				>
					<View style={[flex.center, {width:'100%', height:40, backgroundColor:'#1abc9c'}]}>
						<Text style={{width:'100%', textAlign:'center', color:'#fff'}}>提交</Text>
					</View>
				</TouchableHighlight>
			</KeyboardAvoidingView>		
		)
	}
}
export default Message;
