import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.editBox}>
        <Text style={styles.title}>Editar Perfil de Entrenador</Text>
        <TextInput style={styles.input} placeholder="Nombre" />
        <TextInput style={styles.input} placeholder="Correo" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Nueva Contraseña" secureTextEntry />
        <Button title="Guardar Cambios" color="#ff0000" onPress={() => {}} />
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>← Volver a tu Pokédex</Text>
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
    backgroundColor: 'linear-gradient(to top, #3b4cca, #ffffff)',
  },
  editBox: {
    backgroundColor: '#fefefe',
    borderWidth: 5,
    borderColor: '#ffcb05',
    borderRadius: 20,
    padding: 40,
    width: 400,
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
  },
  title: {
    textAlign: 'center',
    color: '#3b4cca',
    marginBottom: 25,
    fontSize: 24,
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    borderColor: '#3b4cca',
    borderWidth: 2,
    marginBottom: 15,
    fontSize: 14,
  },
  backButton: {
    marginTop: 15,
    textAlign: 'center',
  },
  backText: {
    color: '#3b4cca',
    textDecorationLine: 'underline',
  },
});

export default EditProfile;
