import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color, font, flex, container, margin } from '@/styles/base';
import { ARTICLE_URL } from '@/config';
import { Share, SharePlatform } from '@/components/common';

//搜索结果头部 
export const ResultHeader = ({navigation})=>{

	//取消返回上一级
	let onCancel = ()=>{
		navigation.goBack();
		Keyboard.dismiss();
	}

	//确定
	let onOk = ()=>{
		navigation.navigate('Result');
	}

	return {
		headerLeft:null,
		headerTitle:(
			<View style={{height:30,  width:'100%', paddingLeft:10, position:'relative'}}>
				<Icon style={{position:'absolute', zIndex:2, top:8, left:20}} name='search' size={14} color="#bbb"/>
				<TextInput style={{
					borderRadius: 30,
				  	borderWidth: 1,
				  	height:30,
				  	backgroundColor:'#eee',
				  	padding:0,
				  	borderColor:'#eee',
				   	paddingHorizontal:10,
				   	paddingLeft:30,
				   	color:'#bbb',
				}}
				selectionColor="#bbb"
				autoFocus={false}
				onSubmitEditing={onOk}
				placeholderTextColor="#ccc"
				placeholder="请输入关键字"
				defaultValue={navigation.state.params.keyword }
				underlineColorAndroid='transparent'
				/>
			</View>
		),
		headerRight:(
			<TouchableHighlight style={{
					flex:1,
					width:50,
					height:'100%',
					alignItems:'center',  
					justifyContent: 'center'
				}}
				activeOpacity={0.5}
				underlayColor="#fff"
				onPress={onCancel}
			>
				<View><Text style={{fontSize:16, color:'#1abc9c'}}>取消</Text></View>
			</TouchableHighlight>
		)
	}
}

//搜索头部
export const SearchHeader = ({navigation})=>{
	//取消返回上一级
	let onCancel = ()=>{
		navigation.goBack();
		Keyboard.dismiss();
	}
	let textInput = null;
	let placeholder = navigation.state.params.hotword;
	//确定
	let onOk = (e)=>{
		e.persist();
		!!textInput && textInput.clear()
		navigation.onTextOk && navigation.onTextOk(e.nativeEvent.text || placeholder);
	}

	return {
		headerLeft:null,
		headerTitle:(
			<View style={{height:30, paddingLeft:10, width:'100%', position:'relative'}}>
				<Icon style={{position:'absolute', zIndex:2, top:8, left:20}} name='search' size={14} color="#bbb"/>
				<TextInput style={{
					borderRadius: 30,
				  	borderWidth: 1,
				  	height:30,
				  	backgroundColor:'#eee',
				  	padding:0,
				  	borderColor:'#eee',
				   	paddingHorizontal:10,
				   	paddingLeft:30,
				   	color:'#333',
				}}
				ref={ref=>textInput = ref}
				selectionColor="#bbb"
				autoFocus={true}
				onSubmitEditing={onOk}
				placeholderTextColor="#ccc"
				placeholder="react"
				underlineColorAndroid='transparent'
				/>
			</View>
		),
		headerRight:(
			<TouchableHighlight style={{
					flex:1,
					width:50,
					height:'100%',
					alignItems:'center',  
					justifyContent: 'center'
				}}
				activeOpacity={0.5}
				underlayColor="#fff"
				onPress={onCancel}
			>
				<View><Text style={{fontSize:16, color:'#1abc9c'}}>取消</Text></View>
			</TouchableHighlight>
		)
	}
}

//首页头部
export const HomeHeader = ({navigation})=>({
	headerLeft:(
		<View style={[flex.startBaseline, margin.left10]}>
			<Icon name='bold' style={margin.right5} size={26} color='#1abc9c'/>
			<Text style={[color.black, font.bold, font.size18]}>est</Text>
		</View>
	),
	headerRight:(
		<TouchableHighlight 
			style={{padding:15, height:'100%', flex:1, alignItems:'center'}} 
			onPress={()=>navigation.onHeaderRightClick()} 
			underlayColor={color.green} 
			activeOpacity={0.5}
		>
			<Icon name='search' size={24} color='#2b4356'/>
		</TouchableHighlight>
	),
	headerStyle:{
		borderBottomWidth:1, 
	    elevation: 0,
	    borderStyle:'solid',
	    borderBottomColor:'#f6f6f6'
	}
});

//浏览器头部
export const WebHeader = ({navigation})=>{
	let { article } = navigation.state.params;
	let shareArticle = () => {
		Share.share('Best', article.title, 'http://baidu.com','http://dev.umeng.com/images/tab2_1.png', SharePlatform.QQ, (message) => {
        	console.log(message, 'ffffffffffff')
            // message: 分享成功、分享失败、取消分享
            // TODO ... 
        });
	}
	return {
		headerLeft:(
			<TouchableHighlight 
				activeOpacity={0.5}
				underlayColor="#f1f1f1"
				onPress={()=>navigation.goBack()} 
				style={{width:50, height:'100%', flex:1, justifyContent:'center', alignItems:'center'}}
			>
				<View><Icon name="arrow-left" color="#1abc9c" size={20}/></View>
			</TouchableHighlight>
		),
		headerTitle:(
			<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
				<View><Text style={[color.black, font.size20]}>文章详情</Text></View>
			</View>
			
		),
		headerStyle:{
			borderBottomWidth:1, 
		    shadowOpacity:0, 
		    elevation: 0,
		    borderStyle:'solid',
		    borderBottomColor:'#f6f6f6',
		},
        headerRight:(
			<TouchableHighlight 
				activeOpacity={0.5}
				underlayColor="#f1f1f1"
				onPress={()=>shareArticle()} 
				style={{width:50, height:'100%', flex:1, justifyContent:'center', alignItems:'center'}}
			>
				<View><Icon name="share-square-o" color="#1abc9c" size={20}/></View>
			</TouchableHighlight>
		)
	}
}



