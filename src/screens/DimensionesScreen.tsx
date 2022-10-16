import React from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';

//importamos Dimensions para poder extraer las dimensiones de la pantalla
//const { width, height } = Dimensions.get('window');



export const DimensionesScreen = () => {

    //usamos el hook useWindowDimensions en lugar de Dimensions usado arriba
    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                {/* desestructuramos los estilos y variamos el width para que ocupe el 20% del ancho de la pantalla 
                de esta manera podemos adaptar a cualquier tipo de pantalla basndonos en sus dimensiones*/}
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.20,
                }} />
                <View style={styles.cajaNaranja} />
            </View>
            <Text style={styles.title}>W: {width}, H: {height}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        //width: '50%',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
    },
    title: {
        fontSize: 30,
        color: 'green',
        textAlign: 'center',
    },
});
