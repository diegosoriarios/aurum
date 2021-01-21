import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RadioGroup = ({ text, selected, onSelect, sortHistoric }) => {
  let child = text == selected ? <Icon name="check" color="#11A8F3" size={30} /> : <View />

  const handleSelect = () => {
    onSelect(text)
    sortHistoric();
  }
  return (
    <TouchableOpacity style={styles.radioGroup} onPress={handleSelect}>
      <View style={styles.radioSelected}>
        {child}
      </View>
      <Text style={styles.radioGroupText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  radioGroupText: {
    fontSize: 20,
    fontFamily: 'Cabin-Bold',
  },
  radioSelected: {
    width: 50,
    height: 50,
  },
})

export default RadioGroup;