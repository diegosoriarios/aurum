import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AttachmentButton = ({ filename, handleOnPress }) => (
  <View style={styles.attachmentContainer}>
    <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.btnText}>{filename}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.closeContainer} onPress={handleOnPress}>
      <Text><Icon name="close" size={30} color="#000" /></Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  attachmentContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    height: 50,
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: "#11A8F3",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  btnText: {
    fontWeight: "bold",
    color: "white",
  },
  closeContainer: {
    height: 50,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
})

export default AttachmentButton;