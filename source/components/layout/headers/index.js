import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color, font, flex, container, margin } from '@/styles/base';


//首页头部
export const HomeHeader = ({navigation})=>({
	headerLeft:<View style={[flex.startBaseline, margin.left10]}>
					<Icon name='bold' style={margin.right5} size={26} color='#1abc9c'/>
					<Text style={[color.black, font.bold, font.size18]}>est</Text>
				</View>,
	headerRight:<TouchableHighlight style={{padding:15, height:'100%', flex:1, alignItems:'center'}} onPress={navigation.navigate.bind(navigation, 'Search')} underlayColor={color.green} activeOpacity={0.5}>
					<Icon name='search' size={24} color='#2b4356'/>
				</TouchableHighlight>,
	headerStyle:{
		borderBottomWidth:1, 
		shadowOffset:{width:0, height:0},
	    shadowOpacity:0, 
	    borderStyle:'solid',
	    borderBottomColor:'#f6f6f6'
	}
});

//浏览器头部
export const WebHeader = ({navigation})=>{
	return {
		headerLeft:<TouchableHighlight 
						activeOpacity={0.5}
						underlayColor="#f1f1f1"
						onPress={()=>navigation.goBack()} 
						style={{padding:15, height:'100%', flex:1, alignItems:'center'}}
					>
						<Icon name="arrow-left" color="#1abc9c" size={20}/>
					</TouchableHighlight>,
		headerTitle:<Text style={[color.black, font.size20]}>文章详情</Text>,
		headerStyle:{
			borderBottomWidth:1, 
			shadowOffset:{width:0, height:0},
		    shadowOpacity:0, 
		    borderStyle:'solid',
		    borderBottomColor:'#f6f6f6'
		}
	}
}



//搜索头部
export const SearchHeader = ({navigation})=>{

	let onCancel = ()=>{
		navigation.goBack();
		Keyboard.dismiss();
	}
	let header = (
		<View style={{
			paddingRight:80,
			borderBottomWidth:1, 
		    borderStyle:'solid',
		    width:'100%',
		    height:49,
		    paddingLeft:10,
		    display:'flex',
		    backgroundColor:'#fff',
		    position:'relative',
		    flexDirection:'row',
		    justifyContent:'center',
		    alignItems:'center',
		    borderBottomColor:'#ddd'
		}}>
			<View style={{height:30, width:'100%', position:'relative'}}>
				<Icon style={{position:'absolute', zIndex:2, top:8, left:10}} name='search' size={14} color="#bbb"/>
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
				autoFocus={true}
				onSubmitEditing={()=>alert('searching')}
				placeholderTextColor="#ccc"
				placeholder="请输入关键字"
				underlineColorAndroid='transparent'
				/>
			</View>
			
			<TouchableHighlight style={{
				width:80,
				height:48,
				position:'absolute',
				top:0,
				right:0,
				alignItems:'center',  
    			justifyContent: 'center',
			}}
			activeOpacity={0.5}
			underlayColor="#fff"
			onPress={onCancel}
			>
				<Text style={{fontSize:16, paddingVertical:10, paddingHorizontal:20, color:'#1abc9c', textAlign:'center'}}>取消</Text>
			</TouchableHighlight>
		</View>
	)
	return {
		header, 
		
	}
}