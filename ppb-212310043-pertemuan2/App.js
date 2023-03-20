import Car from './components/Car';
import Student from './components/Student';
import Motorcycle from './components/Motorcycle';
import Bicycle from './components/Bicycle';

export default function App() {
  return (
    <ScrollView style={{ marginTop: 50 }}>
     
      <Car />
      
    </ScrollView>
  );
};
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';