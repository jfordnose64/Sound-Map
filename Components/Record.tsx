import * as React from 'react'
import * as firebase from 'firebase'
import {
  View,
  Button,
  Text,
  StyleSheet,
  AsyncStorage,
  PermissionsAndroid
} from 'react-native'

class Record extends React.Component {
  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.MICROPHONE,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera')
      } else {
        console.log('Camera permission denied')
      }
    } catch (err) {
      console.warn(err)
    }
  }

  // componentDidMount() {
  //   this.requestCameraPermission()
  // }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="request"
          onPress={() => this.requestCameraPermission()}
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
    // marginTop: 20,
    backgroundColor: '#171F33'
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    margin: 10
  }
})

export default Record
