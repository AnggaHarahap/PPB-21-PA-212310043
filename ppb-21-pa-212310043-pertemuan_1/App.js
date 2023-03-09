import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.paragraph}>
         <Image source={require('./assets/WhatsApp Image 2022-03-06 at 14.54.49 (1).jpeg')}
         style={{width: 200, height: 200 ,borderRadius : 100}} />
         
      </Text>
      <Text style={styles.paragraph}> Angga Parulian Harahap</Text>
      <Text style={styles.paragraph}> 212310043</Text>
      <Text style={styles.paragraph}> TI-21-PA2</Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});