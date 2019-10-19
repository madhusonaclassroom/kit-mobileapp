import React, { Component } from "react";
import { ActivityIndicator, Dimensions, StyleSheet, Image, ScrollView, Alert, TextInput } from "react-native";
import auth from '@react-native-firebase/auth';
import { NavigationEvents } from 'react-navigation';
import { Input, Block, theme, Text, Button, Card } from 'galio-framework';
import database, { firebase } from '@react-native-firebase/database';
const { width } = Dimensions.get('screen');
export default class Issue extends Component {

  constructor() {
    super();

    this.state = {
      location: '',
      description: '',
      user: '',
      showLoader: false
    }
  }

  showLoader = () => { this.setState({ showLoader: true }); };
  hideLoader = () => { console.log("hide"); this.setState({ showLoader: false }); };

  componentDidMount() {
    this._bootstrapAsync();
  }


  _bootstrapAsync = async () => {
    var user = firebase.auth().currentUser;
    if (user) {
      this.setState({ user: user })
      console.log(user.email)
    } else {
      this.props.navigation.navigate('Loginscreen');
    }
  };

  Store = async (location, description) => {
    this.showLoader();
    const uid = auth().currentUser.uid;
    const ref = database().ref().child('problems').push();
    await ref.set({
      uid,
      location: location,
      description: description,
    }, function (error) {
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
      <ScrollView style={{ flex: 1 }}>
        <Block flex style={styles.group}>
          <NavigationEvents onDidFocus={() => this._bootstrapAsync()} />
          <Card
            flex
            borderless
            title="Christopher Moon"
            caption="139 minutes ago"
            location="Los Angeles, CA"          
           
          />
          <Button
            color="info"
            style={{ marginTop: theme.SIZES.BASE * 10 }}
            onPress={() => this.Store(this.state.location, this.state.description)}>
            Submit</Button>
          <ActivityIndicator animating={this.state.showLoader} size="large"
            color="#00ff00" />

        </Block>

      </ScrollView>


    );
  }

}

const styles = StyleSheet.create({
  group: {
    paddingTop: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE * 1,


  },

});