import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Update from '../components/Update';
import Card from '../components/Card';
import testPrepData from '../data/TestPrepData';
import Message from '../components/Message';

const RenderList = () => {
  console.log(testPrepData);
  return (
    <View style={styles.listView}>
      {/* <FlatList
        data={testPrepData}
        renderItem={({item}) => {
          <Card title={item.title} imageURL={item.imageURL} />;
          <Text style={styles.text}>Display</Text>;
        }}
        keyExtractor={item => item.index}
      /> */}
      <Card title={testPrepData[0].title} imageURL={testPrepData[0].imageURL} />
      <Card title={testPrepData[0].title} imageURL={testPrepData[0].imageURL} />
      <Card title={testPrepData[0].title} imageURL={testPrepData[0].imageURL} />
      <Card title={testPrepData[0].title} imageURL={testPrepData[0].imageURL} />
      <Card title={testPrepData[0].title} imageURL={testPrepData[0].imageURL} />
      <Card title={testPrepData[0].title} imageURL={testPrepData[0].imageURL} />
      <Card title={testPrepData[0].title} imageURL={testPrepData[0].imageURL} />
      <Card title={testPrepData[0].title} imageURL={testPrepData[0].imageURL} />
      <Card title={testPrepData[0].title} imageURL={testPrepData[0].imageURL} />
      <Card title={testPrepData[0].title} imageURL={testPrepData[0].imageURL} />
    </View>
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
});
