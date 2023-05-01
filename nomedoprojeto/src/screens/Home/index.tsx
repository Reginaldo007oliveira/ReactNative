import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./style";
import { Participant } from "../../components/Participant";

export  function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!");
  }
  function handleParcipantRemove(name: string){
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
      <Participant name="Rodrigo"onRemove={() =>handleParcipantRemove('Rodrigo')} />
      <Participant name="Diego"onRemove={() =>handleParcipantRemove('2')} />
      <Participant name="Vini" onRemove={() =>handleParcipantRemove('3')} />
      <Participant name="Biro" onRemove={() =>handleParcipantRemove('4')} />
    </View>
  )
}