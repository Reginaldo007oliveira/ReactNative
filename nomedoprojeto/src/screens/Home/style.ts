import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    },
      input: {
       marginTop:33,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#df1',
        padding: 16,
        fontSize: 16,
    }
  })