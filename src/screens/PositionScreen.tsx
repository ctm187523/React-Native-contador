import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style = { styles.container }>
            <View style= { styles.cajaMorada } />
            <View style= { styles.cajaNaranja } />
            <View style= { styles.cajaVerde } />
        </View>
    );
};

//por defecto la posicion es relativa, position:relative ver video 69 y 70
//en la posicion relativa top,botton,left y right parten de la posicion donde estan ubicadas respecto al padre
//si se encuentra con otro elemento no lo empuja se pone por debajo
//si ponemos en un elemento position: 'absolute', bottom:0, left:0, top:0  y right: 0
//y no definimos width ni height el elemento se estira y ocupa toda la pantalla
//esto mismo podemos hacerlo usando un shortcut con --> ...StyleSheet.absoluteFillObject

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center', //ubicamos los hijos al centro vertical de la pantalla
        alignItems: 'center', //ubicamos los hijos al centro horizontal de la pantalla
        backgroundColor: '#28C4D9',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        //left: 100, //movemos desde la izquierda 100 unidades respecto a la posicion original en el padre
        //si usamos posicion absolute y no ubucamos los elementos caen uno encima del otro al contrario que con relative que cae uno y el otro se ubica en otra fila de abajo no justo debajo
        position: 'absolute', 
        //top: 10, //le decimos que en la posicion absoluta se ubique en top 
        right: 0,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom:0,
        left: 0,
        //top: 100, //movemos desde arriba  100 unidades respecto a la posicion original en el padre
    },
    cajaVerde: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'relative', //al ser relative empieza en el punto 0,0 del padre arriba a la izquierda
        top: 500,
        left: 100,
        //top: 100, //movemos desde arriba  100 unidades respecto a la posicion original en el padre
    },
});
