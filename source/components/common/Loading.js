import { ActivityIndicator } from 'react-native';
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
		color:'#ccc',
		size:'large'
	}
	constructor(props){
		super();
	}
	render(){
		console.log(this.props)
		return(
			<ActivityIndicator {...this.props}/>
		)
	}
}
export default Loading;