import React from 'react';
import { Dimensions, Image, InteractionManager, View, Text, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var { height, width } = Dimensions.get('window');
import { margin, color, font, flex, container } from '@/styles/base';

class Splash extends React.Component {
	static navigationOptions = ({navigation})=>({
		header:null,
	})
	constructor(props) {
		super(props);
		this.state = {
			opacity:new Animated.Value(0)
		}
	}
	componentDidMount() {
		const { navigation } = this.props;
		this.setOpacity();
		this.timer = setTimeout(() => {
			InteractionManager.runAfterInteractions(() => {
				navigation.navigate('HomeTab');
			});
		}, 2500);
	}
	setOpacity(){
		Animated.timing(this.state.opacity, {
			toValue:1,
			duration:400,
			easing:Easing.linear
		}).start();
	}
	componentWillUnmount() {
		this.timer1 && clearInterval(this.timer1);
	}
	render() {
		let { opacity } = this.state;
		return ( 
			<Animated.View style = {{opacity:opacity, backgroundColor:'#fff', flex: 1, width, height, justifyContent:'center', alignItems:'center'}}>
				<Text style={[color.black, font.bold, font.size50]}>
					<Icon name='bold' style={margin.right5} size={50} color='#1abc9c'/>est
				</Text>
			</Animated.View>
		);
	}
}
export default Splash;