import {View, Text} from 'react-native';
import React from 'react';
import UserInput from '../compoments/UserInput';
import CustomButton from '../compoments/CustomButton';
import Mobile from '../compoments/Mobile';

const LoginScreen = () => {
  const [confirm, setConfirm] = useState(null);

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
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+917610875160')}
      />
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
        <TextInput value={code} onChangeText={text => setCode(text)} />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </View>
    </>
  );
};

export default LoginScreen;
