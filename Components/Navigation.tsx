import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import HomeScreen from './HomeScreen'
import Profile from './Profile'

const Tab = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: Profile }
})

export default createAppContainer(Tab)
