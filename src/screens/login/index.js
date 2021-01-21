import React, { useState, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomButtom from '../../components/CustomButton';
import UserContext from '../../store/UserContext';
import styles from './styles';

function Login({ navigation }) {
  const { email, changeEmail } = useContext(UserContext);

  const [user, setUser] = useState(email);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    changeEmail(user);
    navigation.navigate("App");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={user}
        onChangeText={text => setUser(text)}
      />
      <TextInput 
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <CustomButtom text="Entrar" onPress={handleLogin} />
    </View>
  );
}

export default Login;