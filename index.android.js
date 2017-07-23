import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,

} from 'react-native';
import { TabNavigator , StackNavigator } from "react-navigation";

class RecentChatsScreen extends React.Component {
  render() {
    return (
        <View>
          <Text>List of recent chats</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
            title="Chat with Lucy"
          />
        </View>
      )
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (
        <View>
          <Text>List of recent chats</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Chat', { user: 'dd' })}
            title="Chat with dd"
          />
        </View>
      )
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}
ChatScreen.navigationOptions = {
  headerBackTitle:'Back'
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});
MainScreenNavigator.navigationOptions = {
  headerTitle:'dd',
};
const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});




AppRegistry.registerComponent('reactNativeBlog', () => SimpleApp);