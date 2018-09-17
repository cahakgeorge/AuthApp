import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
    state = { loggedIn: null};

    //https://stackoverflow.com/questions/50555275/react-native-objects-are-not-valid-as-a-react-child-found-object-with-keys
    /* initializeFirebase() {
        const firebase = require("firebase");
      
        // Initialize Firebase
        var config = {
            apiKey: 'AIzaSyD3hBVRHFprEdRoBYWa0fYL0bowf1Bf-yo',
            authDomain: 'authentication-rnative-5348d.firebaseapp.com',
            databaseURL: 'https://authentication-rnative-5348d.firebaseio.com',
            projectId: 'authentication-rnative-5348d',
            storageBucket: 'authentication-rnative-5348d.appspot.com',
            messagingSenderId: '482794843355'
          };
        firebase.initializeApp(config);
      
        //inicializando o firestore
        const firestore = require("firebase/firestore");
        db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true });
      } */
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyD3hBVRHFprEdRoBYWa0fYL0bowf1Bf-yo',
            authDomain: 'authentication-rnative-5348d.firebaseapp.com',
            databaseURL: 'https://authentication-rnative-5348d.firebaseio.com',
            projectId: 'authentication-rnative-5348d',
            storageBucket: 'authentication-rnative-5348d.appspot.com',
            messagingSenderId: '482794843355'
          });

          firebase.auth().onAuthStateChanged((user) => {
            if(user) this.setState({ loggedIn: true });
            else this.setState({ loggedIn: false });
          });
    } 

    onLogoutButtonPressed(){
        firebase.auth().signOut;
    }

    renderContent(){
        switch(this.state.loggedIn) {
            case true:
                return (
                        <Button onPress={this.onLogoutButtonPressed.bind(this)}>
                            Log out
                        </Button>
                );
            case false:
                return <LoginForm />;
            default:  
                return <Spinner size="large"/>
        }
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;