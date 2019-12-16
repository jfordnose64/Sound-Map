import * as React from 'react'
import * as firebase from 'firebase'
import { TextInput } from 'react-native-gesture-handler'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

class Password extends React.Component {
  state = {
    email: ''
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Forgot Password</Text>
        <TextInput
          placeholderTextColor="gray"
          style={styles.input}
          textContentType="emailAddress"
          autoCompleteType="email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder="Email"
        />
        <View style={{ padding: 10 }}>
          <Button
            buttonStyle={{
              borderRadius: 20,
              backgroundColor: '#272343'
            }}
            style={styles.button}
            title="Reset Password"
            onPress={() => sendPasswordReset(this.state.email)}
          />
        </View>
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
    textAlign: 'center',
    paddingTop: 200
  },
  input: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    color: '#272343',
    fontSize: 20,
    fontWeight: '400',
    borderColor: '#bae8e8',
    backgroundColor: '#bae8e8',
    borderWidth: 3,
    borderRadius: 30
  },
  button: {
    padding: 10,
    margin: 20,
    width: '50%'
  },
  header: {
    fontSize: 45,
    fontWeight: '700',
    color: '#272343',
    textAlign: 'center'
  }
})

export default Password
