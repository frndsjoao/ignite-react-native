import React from 'react'

import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  skill: string
}

export default function SkillCard({ skill, ...rest }: SkillCardProps) {
  
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#1f1e25',
    alignItems: "center",
    marginVertical: 5
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold",
    textTransform: 'capitalize'
  }
})