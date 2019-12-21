import * as React from 'react'
import * as firebase from 'firebase'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

class SignOut extends React.Component {
  out = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        alert('Signed Out!')
        this.props.navigation.navigate('Loading')
      })
      .catch(function(error) {
        // An error happened.
        console.log(error)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.out()} raised title="Sign Out" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {},
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // width: '50%'
  }
})

export default SignOut
