import { StyleSheet, Text, View } from 'react-native';
import{ BACKGROUNDSTYLES } from '@constants/index';
import { LinearGradient } from 'expo-linear-gradient';



export default function Index() {
  return (
    <LinearGradient
    colors={['rgb(145, 167, 176)', 'rgba(84,143,196,1)', 'rgba(232,236,249,1)']}
    locations={[0, 0.11, 1]} // Corresponding to 0%, 11%, 100%
    start={{ x: 0, y: 0 }}    // Start point (top-left corner)
    end={{ x: 1, y: 0.3 }}    // End point (adjusted for 95 degrees, slightly diagonal)
    style={{ flex: 1 }}
    >
      <Text>Open up App.tsx to start working on yojjjur app!</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "linear-gradient(95deg, rgba(68,68,68,1) 0%, rgba(84,143,196,1) 11%, rgba(232,236,249,1) 100%)",
  },
});