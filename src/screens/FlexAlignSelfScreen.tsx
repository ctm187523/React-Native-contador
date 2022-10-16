import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const FlexAlignSelfScreen = () => {
    return (
        <View style= { styles.container }>
           <Text style= { styles.caja1 }>Caja 1</Text>
           <Text style= { styles.caja2 }>Caja 2</Text>
           <Text style= { styles.caja3 }>Caja 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
    },
    caja1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        //alignSelf: 'flex-start', //el alignSelf sobreescribe al padre tiene prioridad hacemos que la caja 1 solo ocupe el minimo
        alignSelf: 'center',
    },
    caja2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
});
