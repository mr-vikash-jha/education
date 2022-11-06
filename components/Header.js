import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.main}>
      <View style={styles.mainHeading}>
        <Text style={styles.mainHeadingText}>TestMyPrep</Text>
      </View>

      <Text style={styles.icons}>WhatsApp</Text>
      <Text style={styles.icons}>Share</Text>
      <Text style={styles.icons}>???</Text>
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
});
