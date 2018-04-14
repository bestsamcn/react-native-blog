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
			opacity:0
		}
	}
	componentDidMount() {
		const { navigation } = this.props;
		this.timer1 = setInterval(()=>{
			let { opacity } = this.state;
			opacity = opacity + 0.1;
			this.setState({opacity});
			if(opacity == 1){
				this.timer1 && clearInterval(this.timer1);
			}
		}, 30);
		this.timer = setTimeout(() => {
			InteractionManager.runAfterInteractions(() => {
				navigation.navigate('Tab');
			});
		}, 2500);
	}
	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
		this.timer1 && clearInterval(this.timer1);
	}
	render() {
		let { opacity } = this.state;
		return ( 
			<View style = {{opacity:opacity, backgroundColor:'#fff', flex: 1, width, height, justifyContent:'center', alignItems:'center'}}>
				<Text style={[color.black, font.bold, font.size50]}>
					<Icon name='bold' style={margin.right5} size={50} color='#1abc9c'/>est
				</Text>
			</View>
		);
	}
}
export default Splash;