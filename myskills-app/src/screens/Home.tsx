import React, { useEffect, useState } from "react";
import { 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  Platform, 
  FlatList,
} from 'react-native'
import Button from "../components/Button";
import SkillCard from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

export default function Home() { 
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<SkillData[]>([])
  const [greeting, setGreeting] = useState('')

  function handleAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    if (data.name === '' || data.name === undefined) {
      return 
    } else {
      setMySkills([...mySkills, data])
    }

  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour < 12) {
      setGreeting('Good morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good night')
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{greeting}, João!</Text>

      <TextInput 
        style={styles.input} 
        placeholder="New Skill" 
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button title="Add" onPress={handleAddSkill} />

      <Text style={[styles.title, {marginTop: 40, marginBottom: 10}]}>My Skills:</Text>
       
      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name} 
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginVertical: 20,
    borderRadius: 8
  }
})