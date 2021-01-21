import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomTab = ({ navigation, route, text, icon }) => {
  let color = navigation.isFocused() ? "#11A8F3" : "#fff";

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={{
        flexDirection: "row",
        backgroundColor: "#495057",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text style={{
        color: color, fontSize: 18, fontFamily: 'Cabin-SemiBold',
        paddingHorizontal: 5,
      }}>{text.toUpperCase()}</Text>
      <Icon name={icon} size={30} color={color} />
    </TouchableOpacity>
  );
}

export default BottomTab