import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View, Picker, Alert, TextInput } from "react-native";
import auth from '@react-native-firebase/auth';
import { NavigationEvents } from 'react-navigation';
import { Input, Block, theme, Radio, Button } from 'galio-framework';
import database, { firebase } from '@react-native-firebase/database';
export default class Lodgecomplaint extends Component {

  constructor() {
    super();
   
    this.state = {
      location: '',
      description:'',
      user:'',
      showLoader:false
    }
  }

  showLoader = () => { this.setState({ showLoader:true }); };
  hideLoader = () => { console.log("hide");this.setState({ showLoader:false }); };

  componentDidMount() {
    this._bootstrapAsync();
  }


  _bootstrapAsync = async () => {
    var user = firebase.auth().currentUser;
    if (user) {
      this.setState({user:user})
      console.log(user.email)
    } else {
      this.props.navigation.navigate('Loginscreen');
    }
  };

  Store = async(location, description) => {
  this.showLoader();
  const uid = auth().currentUser.uid;  
  const ref = database().ref().child('problems').push(); 
  await ref.set({
    uid,
    location: location,
    description: description,
  }, function(error) {
    if (error) {
     
      alert("Data Not Saved")
      return
    } else {
      alert("Data Saved Successfully")
      
    }
  }).catch();
  this.hideLoader();
  };


  render() {
    return (
      <Block flex center style={styles.group}>
        <NavigationEvents onDidFocus={() => this._bootstrapAsync()} />
        <Input placeholder="Location"
          color={theme.COLORS.INFO}
          style={{ borderColor: theme.COLORS.INFO }}
          placeholderTextColor={theme.COLORS.INFO} 
          onChangeText={location => this.setState({ location })}
          />
        <Input multiline
          placeholder="Problem Description"
          color={theme.COLORS.INFO}
          style={{ borderColor: theme.COLORS.INFO, height: 250 }}
          placeholderTextColor={theme.COLORS.INFO}
          onChangeText={description => this.setState({ description })}
        />

<Button color="info"
onPress={() => this.Store(this.state.location, this.state.description)}>
Submit</Button>
<ActivityIndicator animating={this.state.showLoader} size="large" 
        color="#00ff00" />

      </Block>


    );
  }

}

const styles = StyleSheet.create({
  group: {
    paddingTop: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE * 1
  },
});