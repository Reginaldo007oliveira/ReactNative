import {  ScrollView,  Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./style";
import { Participant } from "../../components/Participant";

export  function Home() {

  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Mayk', 'João',' Reginaldo'];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!");
  }
  function handleParticipantRemove(name: string){
    console.log(`Você removeu o participante ${name}`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Segunda, 5 de Maio de 2023.
      </Text>
      <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
       
      />
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant
              key={participant} 
              name={participant} 
              onRemove={() => handleParticipantRemove("Rodrigo")} 
            />
          ))
        }
      </ScrollView>
    </View>
  )
}