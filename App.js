import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, ScrollView } from 'react-native';
import Home from "./src/pages/home"
import Footer from "./src/componets/footer"
import Cities from "./src/pages/cities"

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
     <Home />
     <Cities />
     <Footer />
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
      