import React from 'react'
import * as firebase from 'firebase'
import { StyleSheet, Text, View, Button } from 'react-native'
import { handleNavigationChange } from 'react-navigation-stack'
import AppNavigator from './Components/AppNavigator'

export default function App() {
  return (
    <>
      <AppNavigator
        onNavigationStateChange={handleNavigationChange}
        uriPrefix="/app"
      />
    </>
  )
}

firebase.initializeApp({
  apiKey: 'AIzaSyARRSvRK9IOEkHwWzl6_0QZi9R11Ouk1a4',
  authDomain: 'sound-map-7c447.firebaseapp.com',
  databaseURL: 'https://sound-map-7c447.firebaseio.com',
  storageBucket: 'sound-map-7c447.appspot.com'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
