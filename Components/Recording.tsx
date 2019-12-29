import * as React from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import { Audio } from 'expo-av'
import { Button } from 'react-native-elements'

class Recording extends React.Component {
  state = {
    audio: null,
    canRecord: false,
    isRecording: false,
    isDoneRecording: false,
    durationMillis: 0
  }

  onPressRecord = async () => {
    const record = new Audio.Recording()
    try {
      await record.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY
      )
      await record.startAsync()
      alert(`onPressRecord recording!`)
    } catch (error) {
      alert(`onPressRecord error: ${error}`)
    }
  }

  startRecording = () => {}

  stopRecording = () => {}

  render() {
    return (
      <View>
        <Button title="Record" onPress={() => this.onPressRecord()} />
        <Text>Hello React </Text>
      </View>
    )
  }
}

export default Recording
