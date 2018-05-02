import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View>
          <Header title = {"Albums !"}/> 
          <AlbumList />
      </View>
    );
  }
}


