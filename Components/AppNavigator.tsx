import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import React from 'react'
import Home from './Home'
import SignUp from './Firebase/SignUp'
import Login from './Firebase/Login'
import Password from './Firebase/Password'
import Profile from './Profile'
import HomeScreen from './HomeScreen'
import Loading from './Firebase/Loading'
import Map from './Map'
import Icon from '@expo/vector-icons/FontAwesome'

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={24} />
        )
      })
    },
    Map: {
      screen: Map,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="globe" color={tintColor} size={24} />
        )
      })
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user-circle" color={tintColor} size={24} />
        )
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: '#F8F8F8', // active icon color
      inactiveTintColor: '#586589', // inactive icon color
      style: {
        backgroundColor: '#171F33' // TabBar background
      }
    }
  }
)
const AuthStack = createStackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  Password: { screen: Password }
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'Loading'
    }
  )
)
