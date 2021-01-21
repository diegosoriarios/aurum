import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function CustomButtom({ onPress, text }) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.btnText}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: "#11A8F3",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontWeight: "bold",
    color: "white",
    fontFamily: 'Cabin-SemiBold',
  }
});

export default CustomButtom;