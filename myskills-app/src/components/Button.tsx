import React from "react";

import { 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}
  
export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1A8CD8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonSkill: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#1f1e25',
    alignItems: "center",
    marginVertical: 5
  },
})