import * as React from 'react'
import * as firebase from 'firebase'
import { View, Button, Text, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SignOut from './Firebase/SignOut'

class Home extends React.Component {
  state = { currentUser: null }

  render() {
    const { letUser } = this.props.navigation.state.params.data
    const user = () => {
      this.setState({ currentUser: letUser })
      console.log(letUser)
    }

    return (
      <View>
        <Text style={styles.container}>Home Page</Text>

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        />
        <Button title="user" onPress={() => user()} />
        <SignOut />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  }
})

export default Home
