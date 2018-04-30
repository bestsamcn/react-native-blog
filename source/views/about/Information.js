import React from 'react';
import { View, Text, WebView } from 'react-native';
import { connect } from 'dva/mobile';
import { FullLoading } from '@/components/common';
import { container, bg } from '@/styles/base';


@connect(state=>({...state}))
class Information extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isLoading:false
		}
	}
	onLoadStart(){
		this.setState({isLoading:true});
	}
	onLoadEnd(){
		this.setState({isLoading:false});
	}
	render(){
		let baseUrl = 'file:///android_asset/web/index.html#/app/information';
		return(
			<View style={[container.view_]}>
				{this.state.isLoading && <FullLoading type="20"/>}
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
		    	/>
			</View>
		)
	}
}
export default Information;