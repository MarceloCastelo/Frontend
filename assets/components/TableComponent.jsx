import React from 'react';
import { View, Text } from 'react-native';

const TableComponent = ({ resumo, ideal, real, gasto }) => {
  const renderColumn = (columnData) => {
    return (
      <View>
        <Text style={styles.labelText}>{columnData.title}</Text>
        <View style={{ marginTop: 18 }}>
          {columnData.values.map((value, index) => (
            <Text key={index} style={styles.centeredText}>
              {value}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: '#0C2C44',
        borderRadius: 8,
        padding: 16,
      }}
    >
      {/* Coluna "Resumo" */}
      <View>
        <Text style={styles.labelText}>Resumo</Text>
        <View style={{ marginTop: 18 }}>
          {resumo.map((item, index) => (
            <Text key={index} style={styles.text}>
              {item}
            </Text>
          ))}
        </View>
      </View>

      {/* Coluna "Gasto" */}
      {renderColumn(gasto)}

      {/* Coluna "Ideal" */}
      {renderColumn(ideal)}

      {/* Coluna "Real" */}
      {renderColumn(real)}
    </View>
  );
};

const styles = {
  text: {
    fontSize: 16,
    fontFamily: 'MontserratMedium',
    color: 'white',
  },
  labelText: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'MontserratMedium',
    color: '#89D99D',
  },
  centeredText: {
    fontSize: 16,
    fontFamily: 'MontserratLight',
    textAlign: 'center',
    color: 'white',
  },
};

export default TableComponent;
