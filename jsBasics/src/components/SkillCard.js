import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default function SkillCard({ title }) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
})