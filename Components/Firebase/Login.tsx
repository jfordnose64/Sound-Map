import * as React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import * as firebase from 'firebase'
import { NavigationActions } from 'react-navigation'
import { StackActions } from 'react-navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [pass, setPassword] = useState('')
  const [buttonColor, setButtonColor] = useState('gray')
  const [name, setName] = useState('jackson')
  const [userId, setUserId] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const login = async (email, pass) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pass)
      setButtonColor('green')
      alert('Logged In')
      // pushAction()
      console.log('Logged In!')
      // console.log('Home')

      // Navigate to the Home page
    } catch (error) {
      console.log(error)
      alert('Email address/ Password is incorrect')
      setButtonColor('red')
    }
  }

  const writeUserData = (userId, name, email, imageUrl) => {
    firebase
      .database()
      .ref('users/' + userId)
      .set({
        displayName: name,
        email: email,
        photoURL: imageUrl
      })
    console.log(userId)
    console.log(name)
  }

  const user = () => {
    const currentUser = firebase.auth()
    // this.setState({ currentUser })
    // console.log(currentUser.currentUser)
    setUserId(currentUser.currentUser.uid)
    console.log(currentUser.currentUser)
    writeUserData(userId, name, email, imageUrl)
  }

  return (
    <View>
      <Text style={styles.container}>Login Page</Text>
      <TextInput
        textContentType="emailAddress"
        autoCompleteType="email"
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="email"
      />
      <TextInput
        secureTextEntry={true}
        textContentType="password"
        style={styles.input}
        value={pass}
        onChangeText={text => setPassword(text)}
        placeholder="password"
      />
      <Button
        style={styles.button}
        color={buttonColor}
        title="Submit"
        onPress={() => login(email, pass)}
      />
      <Button title="user" onPress={() => user()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '600'
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
