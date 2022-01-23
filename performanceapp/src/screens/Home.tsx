import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import { FriendsList } from '../components/FriendsList';

export function Home() {
  const [name, setName] = useState('');
  const [friends, setFriends] = useState([]);
  async function handleSearch() {
    const response = await fetch(`http://192.168.15.176:3333/friends?q=${name}`);
    const data = await response.json();
    setFriends(data);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>

      <TextInput 
        placeholder='Nome do amigo'
        onChangeText={setName}
        value={name}
        style={styles.input}
      />

      <Button 
        title='Buscar'
        onPress={handleSearch}
      />
      <ScrollView style={styles.list}>
        <FriendsList 
          data={friends}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginVertical: 10,
  },
  list: {
    marginTop: 20,
  }
});
