import * as React from 'react'
import * as firebase from 'firebase'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Permissions from 'expo-permissions'
import { Audio } from 'expo-av'
import Recording from './Recording'

class Record extends React.Component {
  state = {
    color: 'red',
    icon: 'microphone'
  }

  checkMultiPermissions = async () => {
    const { status, permissions } = await Permissions.askAsync(
      Permissions.AUDIO_RECORDING
    )
    if (status === 'granted') {
      console.log('granted')
    } else {
      throw new Error('Location permission not granted')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Recording />
        <Button title="request" onPress={() => this.checkMultiPermissions()} />
        <Button
          buttonStyle={{
            backgroundColor: this.state.color,
            borderRadius: 50,
            margin: 0,
            padding: 0
          }}
          onPress={() => this.yes}
          icon={<Icon name={this.state.icon} size={15} color="white" />}
        />
        <Text style={styles.header}>Record</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#171F33'
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    margin: 10
  }
})

export default Record
