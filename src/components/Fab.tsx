import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native';

//creamos una interface para definir las props recibidas
interface Props {
    title: string;
    position?: 'br' | 'bl'; //hacemos que position que recibe boton right o boton left sea opcional
    onPress: () => void;
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={ onPress }
                activeOpacity= { 0.75 }
                style={[
                    styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right,
                ]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>  {title} </Text>
                </View>
            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            // usamos un View donde contendremos el TouchableNativeFeedback para android
            <View
                //ponemos los estilos como un arreglo ya que recibimos varios estilos uno para colocar el boton verticalmente
                //y el otro para colocarlo horizontalmente dependiendo de la posicion recibida en las props discirminamos con un ternario
                style={[
                    styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right,
                ]}
            >
                {/* creamos un boton con feedback*/}
                <TouchableNativeFeedback
                    onPress={onPress} //recibimos de las props el metodo
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>  {title} </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };
    //usamos Platform importado arriba para discriminar si se esta usando android o Ios y ade esta manera
    //retornar un metodo o otro dependiendo del sistema usado
    return (Platform.OS === 'ios') ? ios() : android();
};

const styles = StyleSheet.create({
    //lo usamos para colocar el boton 
    fabLocation: {
        position: 'absolute', //usamos la posicion obsoluta que es en la que se encuentra originalmente
        bottom: 25, //le decimos que se ubique al final del todo del padre, el View, si fuese cero el valor, si lo queremos mas arriba le damos valores

    },
    //le decimos que se ubique a la derecha del todo del padre, el View, si fuese cero estaria a la derecha del todo para desplazarlo le damos valores
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center', //centramos el contenido en el centro verticalmente
        //el siguiente codigo es para crear sombras copiado del generador de sombras de la url: https://ethercreative.github.io/react-native-shadow-generator/
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center', //en lugar de textAlign usamos alignSelf para que se centre el contenido horizontalemnte
    },
});


