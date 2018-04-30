import React from 'react';
import { Button, View, Text } from 'react-native';
import { navigate } from 'react-navigation';
import { connect } from 'dva/mobile';
import { FullLoading } from '@/components/common';

@connect(state=>({...state}))
class About extends React.Component{
	constructor(props){
		super(props);
	}
	goBack(){
		this.props.navigation.navigate('Home')
	}
	render(){
		return(
			<View>
				<FullLoading type='20'/>
			</View>		
		)
	}
}
export default About;
