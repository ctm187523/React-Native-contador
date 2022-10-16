import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const FlexWrapScreen = () => {
    return (
        <View style= { styles.container }>
           <Text style= { styles.caja1 }>Caja 1</Text>
           <Text style= { styles.caja2 }>Caja 2</Text>
           <Text style= { styles.caja3 }>Caja 3</Text>
           <Text style= { styles.caja1 }>Caja 1</Text>
           <Text style= { styles.caja2 }>Caja 2</Text>
           <Text style= { styles.caja3 }>Caja 3</Text>
           <Text style= { styles.caja1 }>Caja 1</Text>
           <Text style= { styles.caja2 }>Caja 2</Text>
           <Text style= { styles.caja3 }>Caja 3</Text>
           <Text style= { styles.caja1 }>Caja 1</Text>
           <Text style= { styles.caja2 }>Caja 2</Text>
           <Text style= { styles.caja3 }>Caja 3</Text>
           <Text style= { styles.caja1 }>Caja 1</Text>
           <Text style= { styles.caja2 }>Caja 2</Text>
           <Text style= { styles.caja3 }>Caja 3</Text>
           <Text style= { styles.caja1 }>Caja 1</Text>
           <Text style= { styles.caja2 }>Caja 2</Text>
           <Text style= { styles.caja3 }>Caja 3</Text>
           <Text style= { styles.caja1 }>Caja 1</Text>
           <Text style= { styles.caja2 }>Caja 2</Text>
           <Text style= { styles.caja3 }>Caja 3</Text>
           <Text style= { styles.caja1 }>Caja 1</Text>
           <Text style= { styles.caja2 }>Caja 2</Text>
           <Text style= { styles.caja3 }>Caja 3</Text>
        </View>
    );
};

//Flex Wrap dice como tiene que trabajar el componete cuando el hijo se sale del padre
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        alignItems: 'flex-start',
        //flexDirection: 'row',
        flexWrap: 'wrap', // por defecto es noWrap como hay mas componentes que la pantalla y no usamos scroll crea otras columnas para los componentes que no caben si trabajaramos con filas añade nuevas filas
    },
    caja1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
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
