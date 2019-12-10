import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Profile() {
  return (
    <View>
      <Text style={styles.container}>Profile Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  }
})
