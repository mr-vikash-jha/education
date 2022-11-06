import {View, Text, Button, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import Mobile from '../components/Mobile';
import auth from '@react-native-firebase/auth';
import TestMyPrep from './TestMyPrep';

const LoginScreen = () => {
  const [confirm, setConfirm] = useState(null);
  const [value, setValue] = useState('');
  const [authenticated, setAutheticated] = useState(false);

  const [code, setCode] = useState('');

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  function onAuthStateChanged(user) {
    console.log(user, 'user');
  }

  const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    // console.log(confirmation);
    setConfirm(confirmation);
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      setConfirm(null);
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  auth().onAuthStateChanged(user => {
    if (user) {
      setAutheticated(true);
    } else {
      setAutheticated(false);
    }
  });
  if (authenticated) return <TestMyPrep />;

  if (!confirm) {
    return (
      <>
        <Mobile
          value={value}
          setValue={setValue}
          signInWithPhoneNumber={signInWithPhoneNumber}
        />
        {/* <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber('+91 9075501817')}
        /> */}
      </>
    );
  }

  return (
    <>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{marginTop: 10, fontSize: 14}}>
          code is sent to {value}
        </Text>
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: 'black',
            marginBottom: 20,
            marginTop: 30,
            width: 200,
          }}
          value={code}
          onChangeText={text => setCode(text)}
          maxLength={6}
          keyboardType={'number-pad'}
        />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </View>
    </>
  );
};

export default LoginScreen;
