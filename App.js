import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Greeting from './components/Greeting'
import Counter from './components/Counter';
const image = { uri: 'https://i.ibb.co/GRChNdz/mobileapp.jpg' };

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Greeting name={'John'} />
        <Counter />
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
