
import React from 'react';
import { SafeAreaView } from 'react-native';
//import { FlexAlignItemsScreen } from './src/screens/FlexAlignItemsScreen';
//import { FlexAlignSelfScreen } from './src/screens/FlexAlignSelfScreen';
//import { FlexWrapScreen } from './src/screens/FlexWrapScreen';
import { TareaScreen } from './src/screens/TareaScreen';
//import { FlexDirectionScreen } from './src/screens/FlexDirectionScreen';
//import { FlexJustifyContentScreen } from './src/screens/FlexJustifyContentScreen';
//import { FlexScreen } from './src/screens/FlexScreen';
//import { PositionScreen } from './src/screens/PositionScreen';
//import { DimensionesScreen } from './src/screens/DimensionesScreen';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModel';
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';

export const App = () => {
  return (
    //el componente SafeAreaView es para mostrar correctamente la informacion
    //le ponemos flex:1 para que se expanda en toda su totalidad en el padre si no
    //en el archivo BoxObjectModelScreen el padre sera el componente SafeAreaView
    //y se expanderia segun la expansion del componente SafeAreaView que si no se pone
    //flex:1 seria el minimo que ocupe el componente
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#28425B'
    }}>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      {/* <FlexDirectionScreen /> */}
      {/* <FlexJustifyContentScreen /> */}
      {/* <FlexAlignItemsScreen /> */}
      {/* <FlexAlignSelfScreen /> */}
      {/* <FlexWrapScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};


