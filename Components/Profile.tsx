import React from 'react'
import { Platform } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { Button, ThemeProvider, colors } from 'react-native-elements'
import SignOut from './Firebase/SignOut'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Page</Text>
      <SignOut />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  header: {
    textAlign: 'center',
    fontSize: 25
  }
})
