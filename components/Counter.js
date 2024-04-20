import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View >
            <Button title='Counter' onPress={()=>setCounter(counter + 1)}/>
            <Text style={styles.textInput}>{counter}</Text>
        </View>
    )


}
const styles = StyleSheet.create({
    
    textInput: {
      color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
            
    }
  })
export default Counter