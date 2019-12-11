import * as React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import * as firebase from 'firebase'
import { SocialIcon } from 'react-native-elements'

class SignUp extends React.Component {
  state = {
    email: '',
    pass: '',
    confirmPass: '',
    buttonColor: 'gray'
  }

  handleSignUp = async (email, pass) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, pass)
      this.setState({ buttonColor: 'green' })
      this.props.navigation.navigate('Login')
    } catch (error) {
      alert('Email address/ Password is incorrect')
      console.log(error)
      this.setState({ buttonColor: 'red' })
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>Sign Up</Text>
        <TextInput
          style={styles.input}
          textContentType="emailAddress"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder="email"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          textContentType="newPassword"
          value={this.state.pass}
          onChangeText={pass => this.setState({ pass })}
          placeholder="password"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          textContentType="newPassword"
          value={this.state.confirmPass}
          onChangeText={confirmPass => this.setState({ confirmPass })}
          placeholder="confirm password"
        />
        <Button
          style={styles.button}
          color={this.state.buttonColor}
          title="Submit"
          onPress={() => this.handleSignUp(this.state.email, this.state.pass)}
        />

        <SocialIcon
          title="Sign Up With Google"
          button
          type="google"
          // onPress={() => google()}
        />
        <SocialIcon title="Sign Up With Facebook" button type="facebook" />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
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
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
    fontWeight: '500'
  }
})

export default SignUp
