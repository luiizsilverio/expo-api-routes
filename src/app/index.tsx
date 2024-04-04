import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Pressable } from 'react-native';
import { api } from '@/server/api';
import { isAxiosError } from 'axios';

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    try {
      const response = await api.post("/user", {
        email,
        password
      })

      Alert.alert("Olá, " + response.data.name);

    } catch (error) {
      console.log(error)
      if (isAxiosError(error)) {
        return Alert.alert(error.response?.data);
      }
      
      return Alert.alert("Erro: "+ error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        onChangeText={setPassword}
      />
     
     <Pressable style={styles.button} onPress={handleSignIn}>
        <Text style={styles.text}>Entrar</Text>
     </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    gap: 16
  },
  input: {
    height: 54,
    width: "100%",
    backgroundColor: "#E3E3E3E3",
    borderRadius: 5,
    padding: 16,
  },
  button: {
    height: 54,
    width: "100%",
    backgroundColor: "#CECECE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 16,
    fontWeight: "bold"
  }
})