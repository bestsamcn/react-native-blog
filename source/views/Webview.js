import React, { Component } from 'react';
import { WebView, View, Dimensions } from 'react-native';
import { Loading  } from '@/components/common';

let { width, height } = Dimensions.get('window');
class Webview extends Component{
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
		console.log()
		let baseUrl = 'http://blog.bestsamcn.me/article/detail/';
		console.log(baseUrl+id, 'fffffffffff')
		return (
			<WebView bounces={false}
	            scalesPageToFit={true}
	            onLoadStart={this.onLoadStart.bind(this)}
	            onLoadEnd={this.onLoadEnd.bind(this)}
	            source={{uri:baseUrl+id, method: 'GET'}}
	            style={{width:width, height:height}}>
	        </WebView>
        )
	}
	onLoadStart(){
		this.setState({isLoading:true});
	}
	onLoadEnd(){
		this.setState({isLoading:false});
	}
	renderLoading(){
	    if(this.state.isLoading){
	      	return (
	        	<Loading />
	      	);
	    }
	 }
	render(){
		
		return(
			<View>
				{this.renderWebview()}
				{this.renderLoading()}
			</View>
		)
	}
}
export default Webview;