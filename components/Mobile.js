import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Mobile = props => {
  const [active, SetActive] = useState(false);
  // const [value, setValue] = useState('');

  return (
    <View style={styles.mobile}>
      <View style={styles.loginInfo}>
        <Image style={styles.logo} source={require('../Images/Login.png')} />
      </View>

      <Text>You'll receive a 6 digit code</Text>
      <Text>to verify next</Text>

      <View style={styles.inputtextBody}>
        <TextInput
          //   onFocus={() => SetActive(true)}
          //   onBlur={() => SetActive(false)}
          style={styles.inputText}
          value={props.value}
          onChangeText={text => {
            props.setValue(text);
            if (props.value.length === 9) {
              SetActive(true);
            } else {
              SetActive(false);
            }
          }}
          placeholderTextColor="#000"
          placeholder="Enter Mobile Number"
          keyboardType="numeric"
          maxLength={10}
        />
        {active && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.signInWithPhoneNumber(`+91 ${props.value}`)}>
            <Text style={{color: '#000'}}>Continue</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Mobile;

const styles = StyleSheet.create({
  mobile: {
    display: 'flex',
    alignItems: 'center',
  },
  loginInfo: {
    marginTop: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 250,
    width: 250,
  },
  inputtextBody: {
    width: '95%',
    height: 80,
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingLeft: 2,
    //shadow
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
  },
  inputText: {
    backgroundColor: '#fff',
    width: '60%',
    height: '65%',
    marginLeft: 10,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    width: '35%',
    backgroundColor: 'yellow',
    height: '65%',
  },
});
