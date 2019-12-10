import * as React from 'react'
import * as firebase from 'firebase'
import { TextInput } from 'react-native-gesture-handler'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Password() {
  const [email, setEmail] = React.useState('')

  return (
    <View>
      <Text>Forgot Password Page</Text>
      <TextInput
        style={styles.input}
        textContentType="emailAddress"
        autoCompleteType="email"
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="email"
      />
      <Button
        style={styles.button}
        title="Reset Password"
        onPress={() => sendPasswordReset(email)}
      />
    </View>
  )
}

function sendPasswordReset(email) {
  // [START sendpasswordemail]
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(function() {
      // Password Reset Email Sent!
      // [START_EXCLUDE]
      alert('Password Reset Email Sent!')
      // [END_EXCLUDE]
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // [START_EXCLUDE]
      if (errorCode == 'auth/invalid-email') {
        alert(errorMessage)
      } else if (errorCode == 'auth/user-not-found') {
        alert(errorMessage)
      }
      console.log(error)
      // [END_EXCLUDE]
    })
  // [END sendpasswordemail];
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
