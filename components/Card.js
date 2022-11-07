import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Card = props => {
  console.log(props);
  return (
    <TouchableOpacity style={{...styles.main, ...props.style}}>
      <View
        style={{...styles.imageContainer, backgroundColor: `${props.color}`}}>
        <Image source={props.imageURL} height={75} width={75} />
      </View>
      <Text style={styles.titleFont}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  main: {
    margin: '2.1%',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleFont: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});
