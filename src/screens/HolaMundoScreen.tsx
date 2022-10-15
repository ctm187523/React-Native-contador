
import React from 'react';
import { View, Text } from 'react-native';

export const HolaMundoScreen = () => {
    return (
        <View style={{
            //flex 1 dice que abarque todo el contenido de la pantalla
            flex: 1,
            //backgroundColor: 'red',
            //centramos en el centro de la pantalla el contenido
            justifyContent: 'center',
          }}>
            <Text style={{
              fontSize: 45,
              //centramos en el centro de la pantalla el texto
              textAlign: 'center',
            }}>Hola Mundo</Text>
          </View>
    );
};
