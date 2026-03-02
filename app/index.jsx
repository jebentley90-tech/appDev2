import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import pic from '../assets/Super Mario Generations.webp';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={pic} style={{ width: 600, height: 300, marginBottom: 20 }} />
      <Text style={styles.title}>-Welcome to the AI-controlled app!</Text>
      <Text style={{ marginTop: 10, marginBottom: 20}}>
      -This app is controlled by an AI, and it writes some of the lines you see here!</Text>
      <Text style={styles.card}>MUHAHAHAHAHAHAHAHA!</Text>
      <Text></Text>
      <StatusBar style="auto" />

    <Link href="/about" style={styles.link}>Go to About Page</Link>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    //flexWrap: 'wrap',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#eeeeee',
    padding: 2,
    borderRadius: 5,
    marginBottom: 10,
    boxShadow: '4px 4px rgba(0, 0, 0, 0.1)',
  },
  link: {
    marginTop: 30,
    fontSize: 16,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  }
});
