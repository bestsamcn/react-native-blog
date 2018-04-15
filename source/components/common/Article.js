import React from 'react';
import { View, Text, ListView, RefreshControl, TouchableHighlight  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { margin, color, font, flex } from '@/styles/base';
import * as $$ from '@/utils';
export default renderRow = (navigation, item)=>{
	let { navigate } = navigation;
	return (
		<TouchableHighlight 
			style={{backgroundColor:'#fff', paddingHorizontal:20}} 
			activeOpacity={0.5} 
			underlayColor={color.green}  
			onPress={navigate.bind(null, item)}
		>
			<View style={{borderColor:'#eee', borderBottomWidth:1, borderStyle:'solid', paddingVertical:20}}>
				<Text style={[color.black, font.size18, font.bold]}>{item.title}</Text>
				{/* 标签 */}
				<View style={[margin.top10, flex.start]}>
					<View style={[margin.right10, flex.start]}>
						<Text style={margin.right5}><Icon name="comment" style={{marginRight:20}} color="#bbb" size={14} /></Text>
						<Text style={margin.right5}>{item.commentNum}</Text>
						<Text>Comments</Text>
					</View>
					<View style={[margin.right10, flex.start]}>
						<Text style={margin.right5}><Icon name="eye" style={{marginRight:20}} color="#bbb" size={14} /></Text>
						<Text style={margin.right5}>{item.readNum}</Text>
						<Text>Comments</Text>
					</View>
					<View style={[margin.right10, flex.start]}>
						<Text style={margin.right5}><Icon name="tag" style={{marginRight:20}} color="#bbb" size={14} /></Text>
						<Text>{item.tag ? item.tag.name : 'null'}</Text>
					</View>
				</View>
				<Text style={[margin.top10, color.black1, font.size16]}>摘要：{item.previewText}</Text>
				<View style={[margin.top10, flex.start]}>
					<View style={margin.right10}>
						<Text style={{borderRadius:2, paddingVertical:2, paddingHorizontal:4, borderStyle:'solid', borderColor:'#1abc9c', borderWidth:1, color:'#1abc9c', fontSize:12}}>{item.category ? item.category.name :'我可能被删了'}</Text>
					</View>
					<View style={[margin.right10, flex.start]}>
						<Text style={margin.right5}><Icon name="calendar" style={{marginRight:20}} color="#bbb" size={14} /></Text>
						<Text>{$$.dateFormat(item.createTime, 'yyyy-mm-dd')}</Text>
					</View>
					<View style={[margin.right10, flex.start]}>
						<Text style={margin.right5}><Icon name="edit" style={{marginRight:20}} color="#bbb" size={14} /></Text>
						<Text>{$$.dateFormat(item.lastEditTime, 'yyyy-mm-dd')}</Text>
					</View>
				</View>
			</View>
		</TouchableHighlight>
	)
}