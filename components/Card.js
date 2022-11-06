import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = props => {
  console.log(props);
  return (
    <View style={styles.main}>
      <Image source={props.imageURL} height={75} width={75} />
      <Text>{props.title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  main: {
    margin: 7,
    width: 111,
    height: 120,
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    elevation: 5,
    borderRadius: 5,
    padding: 5,
  },
});
