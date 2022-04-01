import { StyleSheet,  View, ScrollView } from 'react-native';
import Home from "./src/pages/home"
import Cities from "./src/pages/cities"

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
     <Home />
     <Cities />
    
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
      