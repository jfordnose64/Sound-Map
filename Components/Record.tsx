import * as React from 'react'
import * as firebase from 'firebase'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Permissions from 'expo-permissions'
import Recording from './Recording'

class Record extends React.Component {
  state = {
    color: 'red',
    icon: 'microphone',
    iconColor: 'white'
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

  record = () => {
    if (this.state.color === 'red') {
      this.setState({
        color: 'white',
        icon: 'square',
        iconColor: 'red'
      })
      console.log('Recording')
    } else if (this.state.color === 'white') {
      this.setState({
        color: 'red',
        icon: 'microphone',
        iconColor: 'white'
      })
      console.log('Stopped Recording')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Recording />
        <Button title="request" onPress={() => this.checkMultiPermissions()} />
        <View style={styles.button}>
          <Button
            containerStyle={{}}
            buttonStyle={{
              backgroundColor: this.state.color,
              borderRadius: 50,
              margin: 0,
              padding: 0,
              width: 50,
              height: 50
            }}
            onPress={() => this.record()}
            icon={
              <Icon
                name={this.state.icon}
                size={30}
                color={this.state.iconColor}
              />
            }
          />
        </View>
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
  },
  button: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Record
