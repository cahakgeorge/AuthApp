//import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';

//make a component
const Header = (props) => { //passed by parent
    //use destructuring (and renaming) to reference style
    const { textStyle: headerTextStyle, viewStyle: headerViewStyle } = style; 
    //use style here
    return (
        <View style={headerViewStyle}>
            <Text style={headerTextStyle}>{props.headerText}</Text>
        </View>
    );
};

//define my style
const style = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        //instead of a border, use a shadow
        shadowColor: '#000', //color of shadow
        shadowOffset: { //tells the element the dimensions of the shadow, how tall, or how high it should be
            width: 0, //no shadows on the right or left handside
            height: 2, //2 pixels high
        },
        shadowOpacity: 0.2, //darkness or how heavy the shadow is, 0.1 - 0.9
        elevation: 2,
        position: 'relative',

    },
    textStyle: {
        fontSize: 20
    }
};

//make component available to other parts of the app
export { Header };
