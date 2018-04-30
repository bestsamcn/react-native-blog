import React from 'react';
import { Button, View, Text } from 'react-native';
import { navigate } from 'react-navigation';
import { connect } from 'dva/mobile';
import { FullLoading, Tabbar } from '@/components/common';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import History from './History';
import Information from './Information';

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
			    style={{}}
			    initialPage={0}
			    renderTabBar={() => <DefaultTabBar />}
			 >
		    	<View  style={{padding:10}} tabLabel='History'><History /></View>
		    	<View tabLabel='Infomation' style={{paddingVertical:10, backgroundColor:'#f6f6f6'}}><Information /></View>
		  </ScrollableTabView>
		)
	}
}
export default About;
