import { ActivityIndicator, View } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component{
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
			<View><ActivityIndicator {...this.props}/></View>
		)
	}
}
export default Loading;