import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={ styles.container }>
             <Text style={ styles.title }>Box Object Model</Text> 
        </View>
    );
};

//definimos los estilos

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        fontSize: 20,
        //padding: 50,
        paddingHorizontal: 100,
        paddingVertical: 20,
        marginRight: 10,
        marginLeft: 10,
        //marginHorizontal: 30,
        //width: 200,
        borderWidth: 10,
        borderColor: 'yellow',
    },
});
