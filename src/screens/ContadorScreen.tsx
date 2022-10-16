import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);
    return (
        <View style={styles.container}>
            <Text style={styles.title} >
                Contador: {contador}
            </Text>

            {/* importamos el compomente creado en components/Fab.tsx */}
            <Fab
                title="+1"
                onPress={() => setContador(contador + 1)}
            />

            <Fab
                title="-1"
                onPress={() => setContador(contador - 1)}
                position="bl"
            />
            {/* <Button
                title="Click"
                onPress={ ()=> setContador( contador + 1 )}
            /> */}

            {/* <TouchableOpacity
                onPress={() => setContador(contador - 1)}
                style={ styles.fabLocationBL }
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }> +1 </Text>
                </View>
            </TouchableOpacity> */}
        </View>
    );
};


//creamos los estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        top: -15,
    },
});
