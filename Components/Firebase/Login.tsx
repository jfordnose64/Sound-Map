import * as React from 'react'
import * as firebase from 'firebase'
import { TextInput } from 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { View, Text, StyleSheet, Button } from 'react-native'
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
      user: currentUser.currentUser.providerData
    })
    console.log(currentUser)
  }

  render() {
    return (
      <View>
        <Text style={styles.container}>Login Page</Text>
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
        <Button
          style={styles.button}
          color={this.state.buttonColor}
          title="Submit"
          onPress={() => this.login(this.state.email, this.state.pass)}
        />
        {/* <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        /> */}
        <SignOut />
        <Button
          title="Create Account"
          onPress={() => this.props.navigation.navigate('SignUp')}
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

export default Loin
