import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Input, Block, theme, Text, Button } from 'galio-framework';
import database, { firebase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      user: '',
    }
  }

  SignOut=()=>{
    this.setState({ isLoggedIn: false }) 
    firebase.auth().signOut().then(function () {                
      console.log("signout")
    }).catch(function (error) {
      console.log("error signout")
    })

  }

  SignIn = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          var user = firebase.auth().currentUser;

          if (user) {
            this.setState({ isLoggedIn: true });
            this.setState({ user: user });
            alert(user.email)
            return
          } else {
            alert("No user")
            return
          }

        }

        );
    } catch (error) {
      alert(error);
      console.log(error.toString(error));
    }



  };



  render() {

    const isLoggedIn = this.state.isLoggedIn;
    const user=this.state.user;
    console.log(isLoggedIn)
    if (!isLoggedIn) {
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
          style={{ marginTop: theme.SIZES.BASE * 2 }}
          round
          color="error"
          Registration
          onPress={() => this.SignIn(this.state.email, this.state.password)}
        >
          <Text>SignIn</Text>
        </Button>
        <Block center>

          <Text style={{ color: 'blue', marginTop: theme.SIZES.BASE * 2 }}
            onPress={() => this.props.navigation.navigate('Registrationscreen')}>
            New User Registration
          </Text>

          <Text style={{ color: 'blue', marginTop: theme.SIZES.BASE * 1 }}
            onPress={() => this.props.navigation.navigate('Registrationscreen')}>
            Forgot Password
          </Text>

         
        </Block>




      </Block>
    )

    }
    else{
      return(
        <Block flex center style={styles.group}>
          <Text>{user.email}</Text>
           <Text style={{ color: 'blue', marginTop: theme.SIZES.BASE * 1 }}
            onPress={() => this.SignOut()                      
              }>
            Sign OUT
            </Text>
        </Block>
      )

    }


  }
}
const styles = StyleSheet.create({
  group: {
    paddingTop: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE * 1
  },
});