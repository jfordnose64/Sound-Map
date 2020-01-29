import * as React from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import AudioRecorderPlayer from 'react-native-audio-recorder-player'
import { Button } from 'react-native-elements'

class Recording extends React.Component {
  state = {
    audio: null,
    canRecord: false,
    isRecording: false,
    isDoneRecording: false,
    durationMillis: 0,
    recordSecs: 0
  }

  audioRecorderPlayer = new AudioRecorderPlayer()

  onStartRecord = async () => {
    const audioRecorderPlayer = new AudioRecorderPlayer()
    const result = await this.audioRecorderPlayer.startRecorder()
    this.audioRecorderPlayer.addRecordBackListener(e => {
      this.setState({
        recordSecs: e.current_position,
        recordTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.current_position)
        )
      })
      return
    })
    console.log(result)
  }

  onStopRecord = async () => {
    const result = await this.audioRecorderPlayer.stopRecorder()
    this.audioRecorderPlayer.removeRecordBackListener()
    this.setState({
      recordSecs: 0
    })
    console.log(result)
    console.log(this.state.recordSecs)
  }

  onStartPlay = async () => {
    console.log('onStartPlay')
    const msg = await this.audioRecorderPlayer.startPlayer()
    console.log(msg)
    this.audioRecorderPlayer.addPlayBackListener(e => {
      if (e.current_position === e.duration) {
        console.log('finished')
        this.audioRecorderPlayer.stopPlayer()
      }
      this.setState({
        currentPositionSec: e.current_position,
        currentDurationSec: e.duration,
        playTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.current_position)
        ),
        duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration))
      })
      return
    })
  }

  onPausePlay = async () => {
    await this.audioRecorderPlayer.pausePlayer()
  }

  onStopPlay = async () => {
    console.log('onStopPlay')
    this.audioRecorderPlayer.stopPlayer()
    this.audioRecorderPlayer.removePlayBackListener()
    console.log(this.state.durationMillis)
  }

  render() {
    return (
      <View>
        <Text>{this.state.durationMillis}</Text>
        <Button title="Record" onPress={() => this.onStartRecord()} />
        <Button title="Stop" onPress={() => this.onStopRecord()} />
        <Button title="Play" onPress={() => this.onStartPlay()} />
        <Button title="Pause" onPress={() => this.onPausePlay()} />
        <Button title="Stop" onPress={() => this.onStopPlay()} />
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Hello React{' '}
        </Text>
      </View>
    )
  }
}

export default Recording
