import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const UserInput = ({value, setvalue, place, securetextentry}) => {
  const [borderWidth, setborderWidth] = useState(0);
  return (
    <View style={{...styles.body, borderWidth: borderWidth}}>
      <TextInput
        // style={{borderWidth: borderWidth}}
        onFocus={() => setborderWidth(2)}
        onBlur={() => setborderWidth(0)}
        style={styles.inputText}
        value={value}
        onChangeText={setvalue}
        placeholderTextColor="#F0FFFF"
        placeholder={place}
        secureTextEntry={securetextentry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    borderColor: '#fb5b5a',
  },
  inputText: {
    height: 50,
    color: 'white',
  },
});
export default UserInput;
