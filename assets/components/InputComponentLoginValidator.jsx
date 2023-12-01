import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


const InputComponent = ({ label, input}) => {
  return (
    <View style={styles.containerInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={input} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    width: "90%",
    margin: 12,
  },

  label: {
    color: "#344054",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D0D5DD",
    color: "#b5b5b5",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
});

export default InputComponent;
