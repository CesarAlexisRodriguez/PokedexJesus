import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const RecoverPassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.recoverBox}>
        <Text style={styles.title}>Centro Pokémon</Text>
        <Text style={styles.subtitle}>¿Olvidaste tu contraseña? Ingresa tu correo.</Text>
        <TextInput style={styles.input} placeholder="Correo de entrenador" keyboardType="email-address" />
        <Button title="Enviar correo" color="#ff0000" onPress={() => {}} />
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>← Volver al inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  recoverBox: {
    backgroundColor: '#f2f2f2',
    borderWidth: 5,
    borderColor: '#ffcb05',
    borderRadius: 20,
    padding: 40,
    width: 350,
    textAlign: 'center',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
  },
  title: {
    color: '#3b4cca',
    fontSize: 28,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#3b4cca',
  },
})