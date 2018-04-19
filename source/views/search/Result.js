import React from 'react';
import { navigate } from 'react-navigation';
import { Button, View, Text, ListView, RefreshControl, TextInput, TouchableHighlight  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'dva/mobile';
import { Loading } from '@/components/common';
import { headerStyles } from '@/styles/home';
import { ResultHeader } from '@/components/layout/headers';
import { margin, color, font, flex, container } from '@/styles/base';
import * as $$ from '@/utils';


class Result extends React.Component{
	static navigationOptions = ResultHeader;
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View></View>
		)
	}
}
export default Result;