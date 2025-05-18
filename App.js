
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur OtakuNet</Text>
      <Text style={styles.subtitle}>Le réseau social ultime pour les fans d'anime !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b2f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#f0a500',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#eaeaea',
    marginTop: 10,
    textAlign: 'center',
  },
});
