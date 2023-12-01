import React from 'react';
import { View, Text } from 'react-native';
import { FaRegEye, FaPlusCircle, FaCreditCard } from 'react-icons/fa'; // Importe os ícones necessários, ou utilize ícones nativos do React Native

const MeusCartoesComponent = ({ nomeMeta, limiteDisponivel, faturaAtual}) => {
  return (
    <View style={styles.entradaSaida}>

      <View
        style={{
          margin: 15,
          flexDirection: 'row',
          gap: 15,
          marginLeft: 50,
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'MontserratMedium' }}>
          {nomeMeta}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
        <View style={{ alignSelf: 'flex-start', marginLeft: 20 }}>
          <Text style={{ color: 'white' }}>Limite disponível</Text>
          <Text style={{ color: 'white' }}> R$ {limiteDisponivel}</Text>
        </View>

        <View style={{ alignSelf: 'flex-end', marginRight: 20 }}>
          <Text style={{ color: 'white', fontSize: 14, fontFamily: 'MontserratMedium' }}>
            Fatura Atual
          </Text>
          <Text style={{ color: 'white', fontSize: 14, fontFamily: 'MontserratMedium' }}>
            R$ {faturaAtual}
          </Text>
        </View>

      </View>
    </View>
  );
};

const styles = {
  entradaSaida: {
    backgroundColor: '#13466B',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '95%',
    margin: 8,
    padding: 8,
  },
};

export default MeusCartoesComponent;
