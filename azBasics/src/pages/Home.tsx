import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

interface SkillData{
  id: string,
  name: string,
}

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id != id))
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if(currentHour < 12)
      setGreeting('Good Morning')
    else if(currentHour >= 12 && currentHour < 18)
      setGreeting('Good Afternoon')
    else if(currentHour >= 18 && currentHour < 20)
      setGreeting('Good Evening')
    else
      setGreeting('Good Night')
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title} testID="welcome">
        Welcome, Raphael
      </Text>

      <Text style={styles.greetings}>
        { greeting }
      </Text>

      <TextInput 
        testID='input-new'
        style={styles.input}
        placeholder='New Skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />
      
      <Button 
        testID='button-add'
        title="Add"
        onPress={handleAddNewSkill} 
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      {
        mySkills &&
        <FlatList
          testID='flat-list-skills'
          data={mySkills}
          keyExtractor={item => item.id}
          keyboardShouldPersistTaps="never"
          renderItem={({ item }) => 
            <SkillCard 
              title={item.name} 
              onPress={() => handleRemoveSkill(item.id)}
            />
          }
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greetings: {
    color: '#FFF',
  }
})