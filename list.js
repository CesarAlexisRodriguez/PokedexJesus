import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.infoPkmn}>
          <Text style={styles.namePkmn}>Charizard</Text>
          <Text style={styles.idPkmn}>#006</Text>
          <View style={styles.tags}>
            <Text style={[styles.typePkmn, { backgroundColor: 'orange' }]}>Fuego</Text>
            <Text style={[styles.typePkmn, { backgroundColor: 'skyblue' }]}>Volador</Text>
          </View>
        </View>
        <View style={styles.imagePkmn}>
          <Image
            style={styles.image}
            source={{ uri: 'https://img.pokemondb.net/sprites/scarlet-violet/icon/charizard.png' }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  infoPkmn: {
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    width: '40%',
    padding: 10,
  },
  namePkmn: {
    fontSize: 25,
    color: 'black',
    marginBottom: 7,
  },
  idPkmn: {
    fontSize: 20,
    color: 'rgb(80, 79, 79)',
    marginBottom: 7,
  },
  tags: {
    flexDirection: 'row',
    marginTop: 5,
  },
  typePkmn: {
    color: 'white',
    margin: 5,
    padding: 10,
    borderRadius: 15,
    textAlign: 'center',
  },
  imagePkmn: {
    backgroundColor: 'orange',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default ListScreen;
