import React from 'react';
import {
	StackNavigator,
} from 'react-navigation';


const App = StackNavigator({
	Main: {
		screen: MainScreen
	},
	Profile: {
		screen: ProfileScreen
	},
});

class MainScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	render() {
		const {
			navigate
		} = this.props.navigation;
		return ( < Button title = "Go to Jane's profile"
			onPress = {
				() =>
				navigate('Profile', {
					name: 'Jane'
				});
			}
			/>
		);
	}
}

export default App;