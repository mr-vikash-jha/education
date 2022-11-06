import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.main}>
      <View style={styles.mainHeading}>
        <Text style={styles.mainHeadingText}>TestMyPrep</Text>
      </View>

      <Image
        style={styles.icons}
        source={require('../Images/whatsapp.png')}
        height={35}
        width={35}
        borderRadius={17}
      />
      <Image
        style={styles.icons}
        source={require('../Images/collaboration.png')}
        height={35}
        width={35}
      />
      <Image
        style={styles.icons}
        source={require('../Images/more.png')}
        height={30}
        width={30}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '8%',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  mainHeading: {
    width: '50%',
    paddingLeft: '10%',
  },
  icons: {
    marginRight: '3%',
  },
  mainHeadingText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
