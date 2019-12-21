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

const AppStack = createBottomTabNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile }
})
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
