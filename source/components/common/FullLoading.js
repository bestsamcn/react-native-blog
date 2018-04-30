import { Dimensions, ActivityIndicator, View } from 'react-native';
import React, { Component } from 'react';
import { flex, color, bg, container } from '@/styles/base';
import PropTypes from 'prop-types';
class FullLoading extends Component{
	static proptypes = {
		animating:PropTypes.bool,
		color:PropTypes.string,
		size:PropTypes.string,
		type:PropTypes.string,
		opacity:PropTypes.number
	}
	static defaultProps = {
		animating:true,
		color:'#1abc9c',
		size:'small',
		type:'10',
		opacity:1
	}
	constructor(props){
		super(props);
		this.state={
			height:0,
			width:0
		}
	}
	componentDidMount(){
		let { height, width } = Dimensions.get('window');
		this.setState({height, width});
	}
	render(){
		let { opacity, type } = this.props;
		let { height, width } = this.state;
		if(type == '20'){
			height = height - 65;
		}else if(type == '30'){
			height = height - 130;
		}
		return(
			<View 
				style={[{zIndex:100, width:width, left:0, height:height, position:'absolute', backgroundColor:`rgba(255, 255, 255, ${opacity})`}, flex.center]}
			>
				<ActivityIndicator {...this.props}/>
			</View>
		)
	}
}
export default FullLoading;