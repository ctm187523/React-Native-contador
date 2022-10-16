import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const FlexDirectionScreen = () => {
    return (
        <View style= { styles.container }>
           <Text style= { styles.caja1 }>Caja 1</Text>
           <Text style= { styles.caja2 }>Caja 2</Text>
           <Text style= { styles.caja3 }>Caja 3</Text>
        </View>
    );
};

//por defecto se ordenan en columnas y se expanden horizontalmente todo lo que pueden
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        flexDirection: 'row', // con flexDirection: 'row' se ordenan en filas y se expanden verticalemente todo lo que pueden
        //flexDirection: 'row-reverse', // con flexDirection: 'row' se ordenan en filas y se expanden verticalemente todo lo que pueden pero empiezan desde la derecha
        //flexDirection:'column-reverse', //se ordenan en columnas pero comenzando por abajo
    },
    caja1: {
        flex: 4,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja2: {
        flex: 4,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja3: {
        flex: 4,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
});
