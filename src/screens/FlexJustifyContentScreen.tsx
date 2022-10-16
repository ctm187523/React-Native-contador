import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const FlexJustifyContentScreen = () => {
    return (
        <View style= { styles.container }>
           <Text style= { styles.caja1 }>Caja 1</Text>
           <Text style= { styles.caja2 }>Caja 2</Text>
           <Text style= { styles.caja3 }>Caja 3</Text>
        </View>
    );
};

//por defecto tenemos justifyContent: 'flex-start'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        //flexDirection: 'row', //hacemos que se ordenen por filas
        //justifyContent: 'flex-end', //empiezan por abajo pero la caja 1 no es la que esta mas abajo como ocurria con flexDirection:'column-reverse'
        //justifyContent: 'center', //con center se ponen los elementos hijos en el medio del componente padre
        //justifyContent: 'space-around', //distribuye los elementos con un mismo espacio vertical entre los hijos
        justifyContent: 'space-between', //distribuye los elementos con un mismo espacio vertical entre ellos pero empezando desde arriba
        //justifyContent: 'space-evenly', //distribuye el mismo espacio entre sus hijos

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
