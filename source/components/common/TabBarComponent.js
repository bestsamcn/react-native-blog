import React from 'react';
import { Keyboard } from 'react-native';
import { TabBarBottom } from 'react-navigation';
import { connect } from 'dva/mobile';

/**
 * tabbarbottom 组件
 * 用于键盘弹起时，隐藏tabbar
 * 每次弹起键盘，获取键盘的高度
 */
@connect(state=>({...state}))
class TabBarComponent extends React.PureComponent {
	constructor(props) {
		super(props)
		this.keyboardWillShow = this.keyboardWillShow.bind(this);
		this.keyboardWillHide = this.keyboardWillHide.bind(this);
		this.state = {
			isVisible: true
		}
	}
	componentWillMount() {
		this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow.bind(this));
		this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide.bind(this));
	}
	componentWillUnmount() {
		this.keyboardWillShowSub.remove()
		this.keyboardWillHideSub.remove()
	}
	//键盘弹起
	keyboardWillShow(event){
		this.props.dispatch({type:'global/setState', payload:{isKeybordVisible:true, keybordHeight:event.endCoordinates.height}});
		this.setState({
			isVisible: false
		});
	}
	//键盘收起
	keyboardWillHide(event){
		this.props.dispatch({type:'global/setState', payload:{isKeybordVisible:false, keybordHeight:0}});
		this.setState({
			isVisible: true
		});
	}
	render() {
		return this.state.isVisible ? <TabBarBottom { ...this.props }/> : null
	}
}

export default TabBarComponent