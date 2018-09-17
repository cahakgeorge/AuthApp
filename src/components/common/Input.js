import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry}) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
   
    return(
        <View style={containerStyle}>
            <Text style={ labelStyle }>{label}</Text>
            <TextInput
                autoFocus={true}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText = {onChangeText}
            />
        </View>
    ); 
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        marginRight: 10,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    }
};

export { Input };