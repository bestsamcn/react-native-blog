import React, { Component } from 'react';
import { WebView, View, Dimensions, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { FullLoading  } from '@/components/common';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color, font, bg, flex, container } from '@/styles/base';
import { WebHeader } from '@/components/layout/headers';


let { width, height } = Dimensions.get('window');
class Webview extends Component{
	static navigationOptions = WebHeader;
	constructor(props){
		super(props);
		this.state={
			isLoading:true
		}
	}
	onNavigationStateChange(){

	}
	onShouldStartLoadWithRequest(){

	}
	renderWebview(){
		let { id } = this.props.navigation.state.params;
		// let baseUrl = 'http://10.0.1.110:8080/article/detail/';
		let baseUrl = 'file:///android_asset/web/index.html#/article/detail/';
		return (
			<WebView
	          	onLoadStart={this.onLoadStart.bind(this)}
	          	onLoadEnd={this.onLoadEnd.bind(this)}
	          	style={{width:'100%', height:'100%', backgroundColor:'#fff'}}
		        source={{
		            uri: baseUrl+id,
		            method: 'GET'
		        }}
		        renderError={(e) => {
	                console.log(e, 'renderError')
	                return <View><Text>renderError回调了，出现错误</Text></View>
	            }}
	            domStorageEnabled={true}
		        javaScriptEnabled={true}
		        mixedContentMode="always"
	         	scalesPageToFit={true}
	    	/>
		);
	}
	onLoadStart(){
		this.setState({isLoading:true});
	}
	onLoadEnd(){
		this.timer = setTimeout(()=>{
			this.setState({isLoading:false});
		}, 500);
		
	}
	componentWillUnmount(){
		this.timer && clearTimeout(this.timer);
	}
	render(){
		return(
			<KeyboardAvoidingView style={[container.view_, bg.white]} behavior="padding">
				{this.renderWebview()}
				{this.state.isLoading && <FullLoading type="top" opacity={1}/>}
			</KeyboardAvoidingView>
		)
	}
}
export default Webview;