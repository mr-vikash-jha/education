import {View, Text, Button, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserInput from '../compoments/UserInput';
import CustomButton from '../compoments/CustomButton';
import Mobile from '../components/Mobile';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [confirm, setConfirm] = useState(null);
  const [value, setValue] = useState('');

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
    console.log(confirmation);
    setConfirm(confirmation);
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  };

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
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{borderWidth: 2, borderColor: 'red'}}
          value={code}
          onChangeText={text => setCode(text)}
        />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </View>
    </>
  );
};

export default LoginScreen;
