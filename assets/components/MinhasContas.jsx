import React from 'react';
import { View, Text } from 'react-native';
import { FaRegEye, FaPlusCircle } from 'react-icons/fa'; 
import { IoPersonCircleSharp } from 'react-icons/io5'; 

const MinhasContasComponent = ({ nomeConta, saldo }) => {
  return (
    <View style={styles.entradaSaida}>
    
      <View
        style={{
          margin: 15,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
        }}
      >

        <IoPersonCircleSharp color={'white'} fontSize={50} />
        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'MontserratMedium' }}>
          {nomeConta}
        </Text>
        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'MontserratMedium' }}>
          {saldo}
        </Text>
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
    padding: 4,
  },
};

export default MinhasContasComponent;
