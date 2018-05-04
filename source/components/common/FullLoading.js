import { Dimensions, ActivityIndicator, View, Platform } from 'react-native';
import React, { Component } from 'react';
import { flex, color, bg, container } from '@/styles/base';
import { connect } from 'dva/mobile';
import PropTypes from 'prop-types';

@connect(state=>({...state}))
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
		type:'full',
		opacity:1
	}
	constructor(props){
		super(props);
		this.state={
			height:0,
			width:0,
			headerHeight:Platform.os=='ios' ? 44 : 56,
			statusHeight:Platform.os=='ios' ? 20 : 24,
			footerHeight:49
		}
	}
	componentDidMount(){
		let { height, width } = Dimensions.get('window');
		this.setState({height, width});
	}
	render(){
		let { opacity, type } = this.props;
		let { height, width, headerHeight, footerHeight, statusHeight } = this.state;
		height = height - statusHeight;
		if(type == 'top'){
			height = height - headerHeight;
		}else if(type == 'bottom'){
			height = height - footerHeight;
		}else if(type == 'center'){
			height = height - headerHeight - footerHeight;
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