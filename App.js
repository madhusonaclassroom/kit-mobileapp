import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Issue from './components/issue';
import Registration from './components/registration';
import Login from './components/login';
import Lodgecomplaint from './components/lodgecomplaint';


class NavigationDrawerStructure extends Component {

  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>

          <Image
            source={require('./menu.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'Login',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const SecondActivity_StackNavigator = createStackNavigator({
  Second: {
    screen: Lodgecomplaint,
    navigationOptions: ({ navigation }) => ({
      title: 'Lodge Complaint',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const ThirdActivity_StackNavigator = createStackNavigator({
  Third: {
    screen: Registration,
    navigationOptions: ({ navigation }) => ({
      title: 'Registration',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const FourthActivity_StackNavigator = createStackNavigator({
    Fourth: {
    screen: Issue,
    navigationOptions: ({ navigation }) => ({
      title: 'Issues',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

class Hidden extends React.Component {
  render() {
    return null;
  }
}


const DrawerNavigatorExample = createDrawerNavigator({
  Registrationscreen: {
    screen: ThirdActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: <Hidden />,
    },
  },
  Loginscreen: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Login',
    },
  },
  Lodgecomplaintscreen: {
    screen: SecondActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Lodge Complaint',
    },
  },
  Issuescrre:{
    screen:FourthActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Issue',
    },
  }

});

export default createAppContainer(DrawerNavigatorExample);
