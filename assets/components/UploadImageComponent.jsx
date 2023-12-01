import React from 'react';
import { View, Text } from 'react-native';
import { BsPersonCircle } from 'react-icons/bs';
import { IoCloudUploadOutline } from 'react-icons/io5';

const UploadComponent = () => {
  return (
    <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
      <View style={{alignItems: "center"}}>
        <IoCloudUploadOutline fontSize={24} />
        <Text style={{fontFamily: "MontserratMedium", fontWeight: "600", color: "#0B3154"}}>
          Clique para fazer upload da sua foto
        </Text>
        <Text style={{color: "#a5a5a5"}}>(max: 800x400px)</Text>
      </View>
    </View>
  );
};

export default UploadComponent;
