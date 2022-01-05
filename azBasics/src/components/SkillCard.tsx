import React from 'react';

import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  title: string
}

export default function SkillCard({ title, ...rest }:SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
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