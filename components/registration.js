import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Input, Block, theme, Text, Button } from 'galio-framework';
import database, { firebase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
export default class Registration extends Component {  

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

 

  SignUp = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (user) {
          alert(" Registration Successful")
          
        })
        .catch(function (error) {
          alert(error.message)
        }
        )
    } catch (error) {
      console.log(error.toString(error));
    }
  };

 
  render() {
    return (
      <Block flex center style={styles.group}>

        <Input placeholder="Email"
          color={theme.COLORS.INFO}
          style={{ borderColor: theme.COLORS.INFO }}
          placeholderTextColor={theme.COLORS.INFO}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={email => this.setState({ email })}
        />



        <Input placeholder="Password"
          color={theme.COLORS.INFO}
          style={{ borderColor: theme.COLORS.INFO }}
          placeholderTextColor={theme.COLORS.INFO}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={password => this.setState({ password })}
        />

       

        <Button
          round
          style={{ marginTop: theme.SIZES.BASE * 2 }}
          onPress={() => this.SignUp(this.state.email, this.state.password)}
        >
          <Text>SignUp</Text>
        </Button>

      </Block>
    )
  }
}
const styles = StyleSheet.create({
  group: {
    paddingTop: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE * 1
  },
});