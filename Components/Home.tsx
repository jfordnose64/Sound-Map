import * as React from 'react'
import * as firebase from 'firebase'
import { View, Button, Text, StyleSheet } from 'react-native'

class Home extends React.Component {
  state = { currentUser: null }

  render() {
    const user = () => {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
      console.log(this.state.currentUser)
    }
    return (
      <View>
        <Text style={styles.container}>Home Page</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        />
        <Button title="user" onPress={() => user()} />
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
