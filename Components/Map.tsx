import * as React from 'react'
import * as firebase from 'firebase'
import { View, Button, Text, StyleSheet, AsyncStorage } from 'react-native'

class Map extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Map</Text>
      </View>
    )
  }
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
    fontSize: 25,
    margin: 10
  }
})

export default Map
