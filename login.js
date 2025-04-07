import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://static.wikia.nocookie.net/espokemon/images/0/02/Pok%C3%A9_Ball_%28Ilustraci%C3%B3n%29.png' }}
          style={styles.image}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <Text style={styles.label}>Correo:</Text>
        <TextInput style={styles.input} placeholder="Correo" keyboardType="email-address" />
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
        <Button title="Enviar" color="red" onPress={() => {}} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Recordar Contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(201, 197, 197)',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 15,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 15,
  },
  footerText: {
    fontSize: 15,
    color: '#3b4cca',
  },
});

export default Login;
