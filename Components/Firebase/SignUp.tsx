import * as React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import * as firebase from 'firebase'
import { SocialIcon } from 'react-native-elements'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [pass, setPassword] = useState('')
  const [confirmPass, setConPass] = useState('')

  return (
    <View>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        style={styles.input}
        textContentType="emailAddress"
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        textContentType="newPassword"
        value={pass}
        onChangeText={text => setPassword(text)}
        placeholder="password"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        textContentType="newPassword"
        value={confirmPass}
        onChangeText={text => setConPass(text)}
        placeholder="confirm password"
      />
      <Button
        style={styles.button}
        title="Submit"
        onPress={() => handleSignUp(email, pass)}
      />
      <Button title="123" onPress={() => pushAction()} />
      <SocialIcon title="Sign Up With Google" button type="google" />
      <SocialIcon title="Sign Up With Facebook" button type="facebook" />
    </View>
  )
}

const handleSignUp = (email, pass) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.')
      } else {
        alert(errorMessage)
      }
      console.log(error)
      // [END_EXCLUDE]
    })
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
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
    fontWeight: '500'
  }
})
