import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color, font, flex, container, margin } from '@/styles/base'


//首页头部
export const HomeHeader = ({navigation})=>({
	headerLeft:<View style={[flex.startBaseline, margin.left10]}>
					<Icon name='bold' style={margin.right5} size={26} color='#1abc9c'/>
					<Text style={[color.black, font.bold, font.size18]}>est</Text>
				</View>,
	headerRight:<TouchableHighlight underlayColor={color.green} activeOpacity={0.5}>
					<Icon name='search' style={margin.right10} size={24} color='#2b4356'/>
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