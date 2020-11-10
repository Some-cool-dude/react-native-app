import React from 'react';
import {StyleSheet, View} from 'react-native';
import Message from './Message';
import CalendarContainer from '../containers/CalendarContainer';

const styles = StyleSheet.create({
    container: {
        height:'100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'stretch'
    }
  });

const MainPage = () => {
  return (
    <>
      <View style={styles.container}>
        <Message />
        <CalendarContainer />
      </View>
    </>
  );
};

export default MainPage;