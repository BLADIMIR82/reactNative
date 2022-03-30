import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, ScrollView } from 'react-native';
import Home from "./src/pages/home"

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
     <Home />
    </View>
    </ScrollView>   
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'white',
   
  },
});
