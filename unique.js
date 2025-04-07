import React from 'react';
import { View, Text, Image, StyleSheet, ProgressBarAndroid, TouchableOpacity } from 'react-native';

const UniqueScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.head}>
        <TouchableOpacity style={styles.arrow}>
          <Text style={styles.arrowText}>{'<='}</Text>
        </TouchableOpacity>

        <View style={styles.nameContainer}>
          <Text style={styles.namePkmn}>Charizard</Text>
        </View>
        <Text style={styles.idPkmn}>006</Text>
      </View>

      <View style={styles.main}>
        <TouchableOpacity style={styles.arrow}>
          <Text style={styles.arrowText}>{'<='}</Text>
        </TouchableOpacity>
        <View style={styles.imgPkmn}>
          <Image
            style={styles.img}
            source={{ uri: 'https://img.pokemondb.net/sprites/scarlet-violet/icon/charizard.png' }}
          />
        </View>
        <TouchableOpacity style={styles.arrow}>
          <Text style={styles.arrowText}>{'=> '}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.tags}>
          <Text style={[styles.tag, { backgroundColor: 'orange' }]}>Fuego</Text>
          <Text style={[styles.tag, { backgroundColor: 'skyblue' }]}>Volador</Text>
        </View>

        <View style={styles.stats}>
          <Text style={styles.titleStats}>Estadísticas Base</Text>

          {['HP', 'ATK', 'DEF', 'SPA', 'SPD', 'VEL'].map((stat, index) => (
            <View style={styles.row} key={index}>
              <Text style={styles.stat}>{stat}</Text>
              <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={Math.random()} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'orange',
    height: '100%',
    padding: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    padding: 10,
  },
  nameContainer: {
    alignItems: 'center',
  },
  namePkmn: {
    padding: 10,
    color: 'orange',
    backgroundColor: 'white',
    fontSize: 20,
    borderRadius: 10,
  },
  idPkmn: {
    color: 'white',
    padding: 10,
    fontSize: 20,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgPkmn: {
    margin: 10,
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  img: {
    borderRadius: 100,
    backgroundColor: 'black',
    width: 200,
    height: 200,
  },
  footer: {
    marginTop: -55,
    padding: 60,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '75%',
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  tag: {
    width: 'fit-content',
    borderRadius: 10,
    padding: 7,
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
  stats: {
    width: '80%',
    flexDirection: 'column',
  },
  titleStats: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    margin: 10,
  },
  stat: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10,
  },
  arrowText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  arrow: {
    padding: 10,
  },
});

export default UniqueScreen;
