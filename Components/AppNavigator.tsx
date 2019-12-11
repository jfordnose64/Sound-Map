import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import React from 'react'
import Home from './Home'
import SignUp from './Firebase/SignUp'
import Login from './Firebase/Login'
import Password from './Firebase/Password'
import Profile from './Profile'
import HomeScreen from './HomeScreen'
import Auth from './Firebase/Auth'
import Loading from './Firebase/Loading'

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Password: { screen: Password },
    Profile: { screen: Profile },
    HomeScreen: { screen: HomeScreen },
    Auth: { screen: Auth },
    Loading: { screen: Loading }
  },
  {
    initialRouteName: 'Loading'
  }
)
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
