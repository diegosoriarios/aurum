import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'; 

import { useNavigation } from '@react-navigation/native';

const  HomeListItem = ({item}) => {
  const navigation = useNavigation();
  const { title, number } = item;

  return (
    <TouchableOpacity style={styles.list} onPress={() => navigation.push("Processo", item)}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.number}>Numero</Text>
     <Text style={styles.cod}>{number}</Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    fontFamily: 'Cabin-Bold',
  },
  number: {
    fontSize: 16,
    color: "grey",
    fontFamily: 'Cabin-Regular',
  },
  cod: {
    fontSize: 18,
    fontFamily: 'Cabin-Regular',
  },
  list: {
    padding: 20,
    fontFamily: 'Cabin-Regular',
  }
})

export default HomeListItem