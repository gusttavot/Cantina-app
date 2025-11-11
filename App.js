import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  return (
    <View style={styles.container}>
      <Text>Usuário</Text>
      <TextInput placeholder='Digite seu email'></TextInput>
      <Text>Senha</Text>
      <TextInput placeholder='Digite sua senha'></TextInput>
      <Button title='Entrar'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
