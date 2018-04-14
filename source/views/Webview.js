import React, { Component } from 'react';
import { WebView, View, Dimensions, Text, TouchableHighlight } from 'react-native';
import { Loading  } from '@/components/common';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color, font, flex, container } from '@/styles/base';

let { width, height } = Dimensions.get('window');
class Webview extends Component{
	static navigationOptions = ({navigation})=>{
		return {
			headerLeft:<TouchableHighlight 
							activeOpacity={0.5}
							underlayColor="#f1f1f1"
							onPress={()=>navigation.goBack()} 
							style={{marginLeft:10, padding:10}}
						>
							<Icon name="arrow-left" color="#1abc9c" size={20}/>
						</TouchableHighlight>,
			headerTitle:<Text style={[color.black, font.size20]}>文章详情</Text>
		}
	}
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
		let baseUrl = 'http://angular.bestsamcn.me/';
		console.log(baseUrl+id)
		let web = <WebView
	          	onLoadStart={this.onLoadStart.bind(this)}
	          	onLoadEnd={this.onLoadEnd.bind(this)}
	          	style={{width:'100%', height:'100%', backgroundColor:'#333'}}
		        source={{
		            uri: baseUrl+id,
		            method: 'GET'
		        }}
		        renderError={() => {
                    console.log('renderError')
                    return <View><Text>renderError回调了，出现错误</Text></View>
                }}
		        javaScriptEnabled={true}
		        mixedContentMode="always"
	         	scalesPageToFit={true}
        	/>
        return web;
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
	      		<View style={[container.view, flex.center]}><Loading /></View>
	        	
	      	);
	    }
	 }
	render(){
		
		return(
			<View style={container.view}>
				{this.renderWebview()}
				{this.state.isLoading && this.renderLoading()}
			</View>
		)
	}
}
export default Webview;