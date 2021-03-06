import React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import firebase from 'firebase'

export default class Loading extends React.Component {
  componentDidMount = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
    this.props.navigation.navigate(isLoggedIn !== '1' ? 'Home' : 'Login')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
