import * as React from 'react'
import * as firebase from 'firebase'
import { TextInput } from 'react-native-gesture-handler'
import { View, Text, StyleSheet, Button } from 'react-native'

class Password extends React.Component {
  state = {
    email: ''
  }
  render() {
    return (
      <View>
        <Text>Forgot Password Page</Text>
        <TextInput
          style={styles.input}
          textContentType="emailAddress"
          autoCompleteType="email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder="email"
        />
        <Button
          style={styles.button}
          title="Reset Password"
          onPress={() => sendPasswordReset(this.state.email)}
        />
      </View>
    )
  }
}

const sendPasswordReset = async email => {
  try {
    await firebase.auth().sendPasswordResetEmail(email)
    alert('Password Reset Email Sent!')
  } catch (error) {
    var errorCode = error.code
    var errorMessage = error.message
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage)
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage)
    }
    console.log(error)
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },
  input: {
    padding: 10,
    margin: 20,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 15
  },
  button: {
    padding: 10,
    margin: 20,
    width: '50%'
  }
})

export default Password
