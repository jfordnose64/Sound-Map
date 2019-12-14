import React from 'react'
import { Platform } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { Button, ThemeProvider, colors } from 'react-native-elements'

export default function Profile() {
  const theme = {
    Button: {
      containerStyle: {
        marginLeft: 25,
        marginRight: 25
      }
    },
    colors: {
      primary: 'gray',
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: 2.5
    }
  }

  return (
    <View>
      <Text style={styles.container}>Profile Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '500',
    padding: 10
  }
})
