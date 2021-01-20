import React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButtom from '../../components/CustomButton';
import UserContext from '../../store/UserContext';

function Profile() {
  const { email } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuário</Text>
      <Text style={styles.email}>{email}</Text>
      <CustomButtom text="Sair" onPress={() => {}} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    paddingBottom: 20,
    fontFamily: 'Cabin-Bold',
  },
  email: {
    fontSize: 20,
    paddingBottom: 20,
    fontFamily: 'Cabin-SemiBold',
    marginBottom: 100,
  },
});


export default Profile;