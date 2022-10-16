import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const FlexAlignItemsScreen = () => {
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
        flexDirection: 'row',
        justifyContent: 'flex-end',
        //alignItems: 'stretch', // es el que viene por defecto que se estiren los elementos lo mas que puedan
        //alignItems: 'baseline', //ocupan solo el espacio necesario de su contenido a menos que le especifiquemos el tamaño
        //alignItems: 'flex-start', //parecido al baseline
        //alignItems: 'flex-end', //ocupan el espacio minimo necesario pero al final en este caso a la derecha si flexDirection fuera row al final de la pantalla
        alignItems: 'flex-end', //ocupan el espacio minimo ubicados en el centro
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
