import React, { useState, useContext, useRef, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

import CustomButtom from '../../components/CustomButton';
import UserContext from '../../store/UserContext';
import styles from './styles';

function Login({ navigation }) {
  const { email, changeEmail } = useContext(UserContext);

  const [user, setUser] = useState(email);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {
    if (user && password) {
      changeEmail(user);
      navigation.reset({
       index: 0,
       routes: [{name: "App" }]
      });
    } else setError(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        ref={emailRef}
        autoFocus={true}
        placeholder="Usuário"
        value={user}
        onChangeText={text => setUser(text)}
        onSubmitEditing={() => passwordRef.current.focus()}
        blurOnSubmit={false}
      />
      <TextInput 
        style={styles.input}
        ref={passwordRef}
        secureTextEntry={true}
        placeholder="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        onSubmitEditing={handleLogin}
        blurOnSubmit={false}
      />
      { error && <Text style={styles.error}>É necessário preencher os dados</Text>}
      <CustomButtom text="Entrar" onPress={handleLogin} />
    </View>
  );
}

export default Login;