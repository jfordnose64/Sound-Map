import * as React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import * as firebase from 'firebase'
import { SocialIcon, Button } from 'react-native-elements'

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
      <View style={styles.body}>
        <Text style={styles.header}>Sign Up</Text>
        <TextInput
          placeholderTextColor="gray"
          style={styles.input}
          textContentType="emailAddress"
          autoCompleteType="email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder="email"
        />
        <TextInput
          placeholderTextColor="gray"
          style={styles.input}
          secureTextEntry={true}
          textContentType="newPassword"
          value={this.state.pass}
          onChangeText={pass => this.setState({ pass })}
          placeholder="password"
        />
        <TextInput
          placeholderTextColor="gray"
          style={styles.input}
          secureTextEntry={true}
          textContentType="newPassword"
          value={this.state.confirmPass}
          onChangeText={confirmPass => this.setState({ confirmPass })}
          placeholder="confirm password"
        />
        <View style={styles.button}>
          <Button
            buttonStyle={{
              backgroundColor: '#272343',
              borderRadius: 20
            }}
            raised
            title="Sign Up"
            onPress={() => this.handleSignUp(this.state.email, this.state.pass)}
          />
        </View>

        {/* <SocialIcon
          title="Sign Up With Google"
          button
          type="google"
          // onPress={() => google()}
        />
        <SocialIcon title="Sign Up With Facebook" button type="facebook" /> */}
        <Button
          title="Already have a account?"
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
    // padding: 10,
    flex: 2,
    padding: 10
  },
  header: {
    textAlign: 'center',
    fontSize: 50,
    padding: 10,
    fontWeight: '700',
    color: '#272343'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    paddingTop: 200
  }
})

export default SignUp
