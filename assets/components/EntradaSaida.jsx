import React from 'react';
import { View, Text } from 'react-native';

const EntradaSaidaComponent = ({ entrada, saida, saldo }) => {
  return (
    <View style={styles.entradaSaida}>
  
      <View style={styles.valores}>
        <Text style={styles.text}>
          {entrada}
        </Text>
        <Text style={styles.text}>
          {saida}
        </Text>
        <Text style={styles.text}>
          {saldo}
        </Text>
      </View>

      <View style={styles.valores}>
        <Text style={styles.text}>
          Entrada
        </Text>
        <Text style={styles.text}>
          Saídas
        </Text>
        <Text style={styles.text}>
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

  text: {
    color: 'white', 
    fontSize: 16, 
    fontFamily: 'MontserratMedium',
  },
};

export default EntradaSaidaComponent;
