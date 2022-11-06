import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Update = () => {
  return (
    <View style={styles.main}>
      <View style={styles.leftUpdate}>
        <Text style={styles.leftUpdateText}>Latest Update</Text>
      </View>
      <View style={styles.triangle}></View>
      <View style={styles.rightUpdate}>
        <Text style={styles.rightUpdateText}>
          Session 2021-22 : Major Test Series (Full Syllabus)
        </Text>
        <Text style={styles.rightUpdateText}>
          announced for JEE (Main), NEET-UG, JEE (Main + Adv.)
        </Text>
      </View>
    </View>
  );
};

export default Update;

const styles = StyleSheet.create({
  main: {
    height: '6%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  leftUpdate: {
    height: '100%',
    width: '20%',
    paddingLeft: '2%',
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 100,
    borderRightWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: 'orange',
    transform: [{rotate: '160deg'}],
    zIndex: 1,
    left: -60,
  },
  leftUpdateText: {
    fontSize: 12,
    color: 'black',
  },
  rightUpdate: {
    paddingRight: '2%',
    height: '100%',
    width: '80%',
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 100,
    left: -100,
  },
  rightUpdateText: {
    fontSize: 12,
    color: 'black',
  },
});
