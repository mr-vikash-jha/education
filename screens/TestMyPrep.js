import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Update from '../components/Update';
import Card from '../components/Card';
import testPrepData from '../data/TestPrepData';
import Message from '../components/Message';

const RenderList = () => {
  console.log(testPrepData);
  return (
    <ScrollView>
      <View style={styles.listView}>
        <Card
          style={styles.cardStyle}
          color="green"
          title={testPrepData[0].title}
          imageURL={testPrepData[0].imageURL}
        />
        <Card
          style={styles.cardStyle}
          color="yellow"
          title={testPrepData[1].title}
          imageURL={testPrepData[1].imageURL}
        />
        <Card
          style={styles.cardStyle}
          color={'blue'}
          title={testPrepData[2].title}
          imageURL={testPrepData[2].imageURL}
        />
        <Card
          style={styles.cardStyle}
          color={'red'}
          title={testPrepData[3].title}
          imageURL={testPrepData[3].imageURL}
        />
        <Card
          style={styles.cardStyle}
          color={'green'}
          title={testPrepData[4].title}
          imageURL={testPrepData[4].imageURL}
        />
        <Card
          style={styles.cardStyle}
          color={'orange'}
          title={testPrepData[5].title}
          imageURL={testPrepData[5].imageURL}
        />
        <Card
          style={styles.cardStyle}
          color={'purple'}
          title={testPrepData[6].title}
          imageURL={testPrepData[6].imageURL}
        />
        <Card
          style={styles.cardStyle}
          color={'green'}
          title={testPrepData[7].title}
          imageURL={testPrepData[7].imageURL}
        />
        <Card
          style={styles.cardStyle}
          color={'green'}
          title={testPrepData[8].title}
          imageURL={testPrepData[8].imageURL}
        />
        <Card
          style={styles.cardStyle}
          color={'green'}
          title={testPrepData[9].title}
          imageURL={testPrepData[9].imageURL}
        />
      </View>
    </ScrollView>
  );
};

const TestMyPrep = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Header />
      <Update />
      <RenderList />
      <Message />
    </SafeAreaView>
  );
};

export default TestMyPrep;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  text: {
    color: 'black',
  },
  listView: {
    width: '96%',
    height: '86%',
    marginHorizontal: '2%',
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardStyle: {
    width: '29%',
    height: 120,
  },
});
