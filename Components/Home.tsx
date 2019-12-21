import * as React from 'react'
import * as firebase from 'firebase'
import { View, Button, Text, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Tab from './Navigation'
import SignOut from './Firebase/SignOut'

interface Name {
  name: string
}

class Home extends React.Component {
  state = {
    currentUser: null,
    isLoggedIn: false,
    color: 'red',
    name: 'First Name'
  }

  render() {
    const { letUser } = this.props.navigation.state.params.data
    const user = () => {
      this.setState({ currentUser: letUser, isLoggedIn: true })
      const currentUser = firebase.auth()
      console.log(currentUser)
      console.log('logged')
    }

    const query = async () => {
      try {
        firebase
          .database()
          .ref(`users/${this.state.currentUser}`)
          .set({
            email: 'jford@gmail.com',
            name: 'Jackson Ford',
            uid: this.state.currentUser
          })
      } catch (error) {
        console.log(error)
      }
    }

    const readUserData = async () => {
      try {
        await firebase
          .database()
          .ref(`users/${this.state.currentUser}`)
          .on('value', function(snapshot) {
            data(snapshot)
          })
      } catch (error) {
        console.log(error)
      }
    }

    const data = snapshot => {
      const userName = snapshot.val()
      this.setState({ name: userName.name })
    }

    this.componentDidMount = () => {
      readUserData()
    }

    return (
      <View style={styles.container}>
        <Text style={styles.container}>Home Page</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        />
        {/* <Button title="user" onPress={() => user()} /> */}
        {/* <Button title="User Data" onPress={() => readUserData()} /> */}
        <SignOut />
        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Text style={{ textAlign: 'center' }}>Hello, {this.state.name}</Text>
        <Text style={{ color: this.state.color, textAlign: 'center' }}>
          Logged In
        </Text>
        {/* <Tab /> */}
        {/* <BottomNavigator /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
})

export default Home
