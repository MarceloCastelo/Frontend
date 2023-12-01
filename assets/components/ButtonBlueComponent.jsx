import React from 'react';
import { View, Text, Pressable } from 'react-native';

const LoginComponent = ({nomeBotao}) => {
  return (
    <View>
      <Pressable
        style={{
          width: 180,
          alignItems: "center",
          backgroundColor: "#0C2C44",
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            padding: 14,
            color: "white",
            fontSize: 16,
            fontFamily: "MontserratMedium",
          }}
        >
          {nomeBotao}
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginComponent;
