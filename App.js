import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ImageBackground, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

const request = async(callback) =>{
  const response = await fetch('https://api.thedogapi.com/v1/breeds');
  const parsed = await response.json();
  callback(parsed);
}

export default function App() {
  
  const [registros, setRegistos] = useState([]);
  useEffect(()=>{
    request(setRegistos);
  },[])

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/fundo.jpg')} resizeMode="cover" style={styles.back}>
      <ScrollView>
      <Text style={styles.titulo}>Doguinhos</Text>
      <FlatList 
      data={registros}
      renderItem={({item})=>
      <Text style={styles.itens}>
        <Text>Id: {item.id}{'\n'}</Text>
        <Text>Nome: {item.name}{'\n'}</Text>
        <Text>Temperamento: {item.temperament}{'\n'}</Text>
        <Text>Expectativa de vida: {item.life_span}{'\n'}</Text>
      </Text>
    }
      />
      <StatusBar style="auto" />
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
    paddingBottom:25,
  },
  itens:{
    flex: 1,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginRight: 10, 
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom:10,
    textAlign: 'center',
    paddingVertical: 10,
    color: '#000',
    fontSize: 20
  },
  titulo:{
    fontSize: 30,
    textAlign: 'center',
    marginVertical:40,
    color: '#000',
  },
  back: {
    flex: 1,
    justifyContent: 'center',
    lignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: -1,
    position: 'absolute',
  }
});
