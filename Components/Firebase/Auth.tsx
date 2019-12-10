import * as firebase from 'firebase'
import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class Auth extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.container}>Welcome to Sound Map!</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
          style={styles.button}
        />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
          style={styles.button}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },
  button: {
    padding: 10,
    margin: 20,
    width: '50%'
  }
})

export default Auth
