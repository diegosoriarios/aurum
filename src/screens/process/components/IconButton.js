import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconButton = ({ onPress, icon }) => (
  <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
    <Icon name={icon} size={30} color="#11A8F3" />
  </TouchableOpacity>
);

export default IconButton