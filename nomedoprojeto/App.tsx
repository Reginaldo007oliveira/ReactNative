import { StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    
    <View style={styles.container}>
    <Text style={styles.eventName}>
      Nome do evento
    </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>
    </View>

)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
    display:"flex",
    alignItems:"center",
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 100,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  }
})