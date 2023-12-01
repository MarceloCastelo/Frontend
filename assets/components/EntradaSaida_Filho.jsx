import React from 'react';
import { View, Text } from 'react-native';

const EntradaSaidaComponent = ({ limite, saida, saldo }) => {
  return (
    <View style={styles.entradaSaida}>
  
      <View style={styles.valores}>
        <Text style={{ color: '#00FF47', fontSize: 16, fontFamily: 'MontserratMedium' }}>
          {limite}
        </Text>
        <Text style={{ color: '#FF0000', fontSize: 16, fontFamily: 'MontserratMedium' }}>
          {saida}
        </Text>
        <Text style={{ color: '#0066FF', fontSize: 16, fontFamily: 'MontserratMedium' }}>
          {saldo}
        </Text>
      </View>

      <View style={styles.valores}>
        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'MontserratMedium' }}>
          Limite
        </Text>
        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'MontserratMedium' }}>
          Saídas
        </Text>
        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'MontserratMedium' }}>
          Saldo
        </Text>
      </View>
    </View>
  );
};

const styles = {
  entradaSaida: {
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
    margin: 12,
  },
  valores: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    margin: 20,
  },
};

export default EntradaSaidaComponent;
