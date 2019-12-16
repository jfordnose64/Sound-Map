import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements'
import * as firebase from 'firebase'
import { TextInput } from 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements'

class Loin extends React.Component {
  state = {
    user: null,
    email: '',
    pass: '',
    buttonColor: '#272343'
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
        <Text style={styles.container}>Login</Text>
        <View>
          <TextInput
            placeholderTextColor="gray"
            textContentType="emailAddress"
            autoCompleteType="email"
            style={styles.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="Email Address"
          />
          <TextInput
            placeholderTextColor="gray"
            secureTextEntry={true}
            textContentType="password"
            style={styles.input}
            value={this.state.pass}
            onChangeText={pass => this.setState({ pass })}
            placeholder="Password"
          />
        </View>
        <View style={styles.flex}>
          <View style={styles.button}>
            <Button
              buttonStyle={{
                backgroundColor: this.state.buttonColor,
                borderRadius: 20
              }}
              raised
              title="Login"
              onPress={() => this.login(this.state.email, this.state.pass)}
            />
          </View>
          <View style={styles.button}>
            <Button
              titleStyle={{
                color: '#272343'
              }}
              buttonStyle={{
                backgroundColor: '#ffffff',
                borderRadius: 30,
                borderColor: '#272343',
                borderWidth: 3
              }}
              raised
              title="Sign Up"
              onPress={() => this.props.navigation.navigate('SignUp')}
            />
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <Button
            buttonStyle={{
              backgroundColor: '#272343',
              borderRadius: 20
            }}
            raised
            title="Forgot Password?"
            onPress={() => this.props.navigation.navigate('Password')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    padding: 10,
    fontSize: 50,
    fontWeight: '700',
    color: '#272343'
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
    // marginRight: 140,
    // marginLeft: 140,
    padding: 10,
    flex: 2
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingTop: 0
  },
  flex: {
    flexDirection: 'row',
    // borderColor: 'red',
    // borderWidth: 5,
    justifyContent: 'center'
  }
})

export default Loin
