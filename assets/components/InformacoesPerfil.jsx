import React from 'react';
import { View, Text} from 'react-native';


const InformacoesPerfil = ({titulo, informacoes}) => {
  return (
    <View>
      <Text style={{color: "#0C2C44", fontWeight: "600", fontSize: 20}}>{titulo}</Text>
      <Text style={{color: "#0C2C44", fontWeight: "400", fontSize: 16}}>{informacoes}</Text>
    </View>
  );
};

export default InformacoesPerfil;
