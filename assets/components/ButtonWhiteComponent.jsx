import React from 'react';
import { View, Text, Pressable } from 'react-native';

const LoginComponent = ({nomeBotao}) => {
  return (
    <View>
      <Pressable
        style={{
          width: 180,
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#D0D5DD",
        }}
      >
        <Text
          style={{
            padding: 14,
            color: "black",
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
