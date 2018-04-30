import React from 'react';
import { Button, View, Text } from 'react-native';
import { navigate } from 'react-navigation';
import { connect } from 'dva/mobile';
import { FullLoading, Tabbar } from '@/components/common';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

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
			<ScrollableTabView
				tabBarUnderlineStyle={{marginBottom:-1, backgroundColor:'#1abc9c', borderRadius:4}}
				tabBarActiveTextColor="#1abc9c"
				tabBarTextStyle={{}}
			    style={{}}
			    initialPage={1}
			    renderTabBar={() => <DefaultTabBar />}
			 >
		    	<Text tabLabel='History'>History</Text>
		    	<Text tabLabel='Infomation'>Infomation</Text>
		  </ScrollableTabView>
		)
	}
}
export default About;
