import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
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
    //si ponemos en las cajas respectivamente flex:4,flex:4 y flex:2 ocupamos del padre View
    //como la suma hace 10 entonces los de flex:4 ocupan el 40% y el de flex:2 el 20%
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
        flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
});
