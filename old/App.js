import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>MIUN ELEK</Text>
      <Text>MIUN ELEK</Text>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
