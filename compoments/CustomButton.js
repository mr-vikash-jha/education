import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = ({onpress, text, type}) => {
  return (
    <Pressable onPress={onpress} style={[styles.customBtn, styles[`${type}`]]}>
      <Text style={styles.customText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  customBtn: {
    borderRadius: 25,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Primary: {
    marginTop: 40,
    height: 50,
    backgroundColor: '#fb5b5a',
  },
  Secondary: {
    marginTop: 10,
    // height: 50,
  },
  customText: {
    color: 'white',
  },
});

export default CustomButton;
