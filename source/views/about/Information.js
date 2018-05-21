import React from 'react';
import { View, Text, WebView, ToastAndroid, Linking } from 'react-native';
import { connect } from 'dva/mobile';
import { FullLoading } from '@/components/common';
import { container, bg } from '@/styles/base';
import { HomeHeader } from '@/components/layout/headers';

@connect(state=>({...state}))
class Information extends React.Component{
	static navigationOptions = HomeHeader;
	constructor(props){
		super(props);
		this.state={
			isLoading:false
		}
	}

	//加载开始
	onLoadStart(){
		this.setState({isLoading:true});
	}

	//加载结束
	onLoadEnd(){
		this.setState({isLoading:false});
	}

	//搜索
	onHeaderRightClick(){
		let { hotwordList } = this.props.search;
		let name = !!hotwordList && !!hotwordList[0] && hotwordList[0].name || HOT_WORD;
		this.props.navigation.navigate({routeName:'Search', params:{hotword:name}})

	}

	//注入脚本
	injectJavaScript(){
		return  `
	    	var oLink = document.getElementById('github-link');
	        oLink.onclick= function(){
	        	window.postMessage(this.getAttribute('url'));
	        	document.postMessage(this.getAttribute('url'));
	        	return false;
	        }
		`
	}
	
	//接受网页消息
	onMessage(e){
		console.log(e)
		Linking.openURL(e.nativeEvent.data).catch(err => ToastAndroid.show('出错了', 1000));
	}
	componentDidMount(){
		this.props.navigation.onHeaderRightClick = this.onHeaderRightClick.bind(this);
	}
	render(){
		// let baseUrl = 'http://192.168.0.103:8080/#/about';
		let baseUrl = 'file:///android_asset/web/index.html#/about';
		return(
			<View style={[container.view_]}>
				{this.state.isLoading && <FullLoading type="center"/>}
				<WebView
		          	onLoadStart={this.onLoadStart.bind(this)}
		          	onLoadEnd={this.onLoadEnd.bind(this)}
		          	style={{width:'100%', height:'100%', backgroundColor:'#fff'}}
			        source={{
			            uri: baseUrl,
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
		         	onMessage={this.onMessage.bind(this)}
		         	injectedJavaScript={this.injectJavaScript()}
		    	/>
			</View>
		)
	}
}
export default Information;