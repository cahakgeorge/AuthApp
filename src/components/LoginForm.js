import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component{
    state = { email: '', password: '', error: '', loading: false }; //setting state prop
    onButtonPress(){
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onSuccess.bind(this))
        .catch(()=>{
            //if initial verification fails, now register user with same credentials
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onSuccess(){
        this.setState({email: '', password: '', error: '', loading: false});
    }

    onLoginFail(){
        this.setState({loading: false, error: 'Authentication failed: ' });//+ error.message
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render(){

        return(    
            <Card>
                <CardSection>
                    <Input 
                        placeholder="xyz@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText = { email => this.setState({ email }) }
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText = { password => this.setState({ password }) }
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

 const styles={
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
 };

export default LoginForm;