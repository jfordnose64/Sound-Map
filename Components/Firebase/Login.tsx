import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements'
import * as firebase from 'firebase'
import { TextInput } from 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native'
import SignOut from './SignOut'

class Loin extends React.Component {
  state = {
    user: null,
    email: '',
    pass: '',
    buttonColor: 'gray'
  }

  login = async (email, pass) => {
    try {
      //Login to firebase for auth
      await firebase.auth().signInWithEmailAndPassword(email, pass)
      //Change the color of the button
      this.setState({ buttonColor: 'green' })
      // alert('Logged In')
      console.log('Logged In!')
      this.user()
      console.log(this.state.user)
      // const letUser = this.state.user
      // console.log(letUser)
      // Navigate to the Home page
      this.props.navigation.navigate('Home', {
        data: { letUser: this.state.user }
      })
    } catch (error) {
      //Catch error
      console.log(error)
      //Alert to show error to consumer
      alert('Email address/ Password is incorrect')
      //Visually show login failed
      this.setState({ buttonColor: 'red' })
    }
  }

  user = () => {
    //Call for current user
    const currentUser = firebase.auth()
    this.setState({
      user: currentUser.currentUser.uid
    })
    // console.log(currentUser)
  }

  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.container}>Login Page</Text>
        <View style={styles.opacity}>
          <TextInput
            textContentType="emailAddress"
            autoCompleteType="email"
            style={styles.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="email"
          />
          <TextInput
            secureTextEntry={true}
            textContentType="password"
            style={styles.input}
            value={this.state.pass}
            onChangeText={pass => this.setState({ pass })}
            placeholder="password"
          />
        </View>
        <Button
          style={styles.button}
          color={this.state.buttonColor}
          title="Submit"
          onPress={() => this.login(this.state.email, this.state.pass)}
        />
        <Button
          style={styles.button}
          title="Create Account"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
        <Button
          title="Forgot Password?"
          onPress={() => this.props.navigation.navigate('Password')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '600'
    // marginTop: 40
  },
  input: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'white',
    borderWidth: 4,
    margin: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    color: 'black'
  },
  button: {
    padding: 10,
    margin: 20,
    width: '50%'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  opacity: {
    borderColor: 'white',
    borderWidth: 4,
    margin: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    opacity: 0.4,
    padding: 10
  }
})

export default Loin
