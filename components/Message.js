import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Message = () => {
  return (
    <View style={styles.main}>
      <Text>Message</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  main: {
    bottom: 10,
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 8,
    borderBottomRightRadius: 2,
    shadowColor: '#171717',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    elevation: 5,
    backgroundColor: 'red',
    position: 'absolute',
  },
});
