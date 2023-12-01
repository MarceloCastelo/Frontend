import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PasswordStrengthMeterBar from 'react-native-password-strength-meter-bar';

const InputComponent = ({ label, value }) => {
  const [password, setPassword] = React.useState('');

  const onPasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <View style={styles.containerInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={label} // Alterado para usar a prop label como placeholder
        value={value}
        onChangeText={onPasswordChange}
        secureTextEntry // Para ocultar a senha digitada
      />
      <PasswordStrengthMeterBar
        minLength={8}
        password={password} // Alterado para usar o estado local 'password'
        style={{ marginTop: 10 }}
        showStrengthText={true} // Corrigido o nome da prop para 'showStrengthText'
        radius={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    width: '90%',
    margin: 12,
  },
  label: {
    color: '#344054',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    color: '#b5b5b5',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10, // Adicionado para separar o TextInput do PasswordStrengthMeterBar
  },
});

export default InputComponent;
