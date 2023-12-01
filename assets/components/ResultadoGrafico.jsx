import React from 'react';
import { View, Text } from 'react-native';

const LegendItem = ({ color, label }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
      <View style={{ backgroundColor: color, width: 20, height: 20 }} />
      <Text style={{ fontFamily: 'MontserratMedium', fontWeight: '600', fontSize: 12 }}>{label}</Text>
    </View>
  );
};

const ResultadoGrafico = () => {
  return (
    <View style={{ flexDirection: 'row', gap: 20, margin: 14 }}>
      <LegendItem color="#89D99D" label="Investimentos" />
      <LegendItem color="#3B8C6E" label="Custos Variáveis" />
      <LegendItem color="#005452" label="Custos Fixos" />
    </View>
  );
};

export default ResultadoGrafico;
