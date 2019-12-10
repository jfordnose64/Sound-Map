import * as React from 'react'
import { Button, View, Text } from 'react-native'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Password Reset"
          onPress={() => this.props.navigation.navigate('Password')}
        />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="Auth"
          onPress={() => this.props.navigation.navigate('Auth')}
        />
        <Button
          title="Loading"
          onPress={() => this.props.navigation.navigate('Loading')}
        />
      </View>
    )
  }
}

export default HomeScreen
