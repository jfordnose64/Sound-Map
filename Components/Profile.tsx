import React, { useEffect, useState } from 'react'
import { Platform, YellowBox } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { Button, ThemeProvider, colors, Avatar } from 'react-native-elements'
import SignOut from './Firebase/SignOut'
import * as firebase from 'firebase'

export default function Profile() {
  const [email, setEmail] = useState('')

  const user = () => {
    const currentUser = firebase.auth()
    console.log(currentUser.currentUser)
    setEmail(currentUser.currentUser.email)
  }

  useEffect(() => {
    user()
  }, [])

  return (
    <View style={styles.container}>
      <Avatar
        size="large"
        rounded
        source={{
          uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
        }}
      />
      <Text style={styles.header}>Profile Page</Text>
      <Text style={{ textAlign: 'center' }}>Email: {email}</Text>
      <Button title="Firebase" onPress={() => user()} raised />
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
