import { Dimensions, ActivityIndicator, View } from 'react-native';
import React, { Component } from 'react';
import { flex, color, bg, container } from '@/styles/base';
import PropTypes from 'prop-types';
let { height, width } = Dimensions.get('window');

class FullLoading extends Component{
	static proptypes = {
		animating:PropTypes.bool,
		color:PropTypes.string,
		size:PropTypes.string
	}
	static defaultProps = {
		animating:true,
		color:'#1abc9c',
		size:'small'
	}
	constructor(props){
		super(props);
	}
	render(){
		return(
			<View 
				style={[{zIndex:100, width:width, left:0, height:height-130, position:'absolute', backgroundColor:'rgba(255, 255, 255, 0.5)'}, flex.center]}
			>
				<ActivityIndicator {...this.props}/>
			</View>
		)
	}
}
export default FullLoading;