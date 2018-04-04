import React from 'react';
import { StackNavigator, navigate } from 'react-navigation';
import { Button, View, Text, ListView } from 'react-native';
import { connect } from 'dva/mobile';

const _state = state=>{
	return {
		...state
	}
}
@connect(_state)
class Home extends React.Component{
	constructor(props){
		super(props);
	}
	pushState(){
		this.props.dispatch({type:'home/getArticleList', params:{}})
		// this.props.navigation.navigate('About')

	}
	componentWillMount(){
		this.props.dispatch({type:'home/getArticleList', params:{}})
	}
	_renderRow(row){
		return <Text style={{color:'#333'}}>{row.title}</Text>
	}
	render(){
		let { articleList } = this.props.home;
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return(
			<View>
				<ListView enableEmptySections dataSource={ds.cloneWithRows(articleList)} renderRow={this._renderRow.bind(this)}/>
			</View>		
		)
	}
}
export default Home;
