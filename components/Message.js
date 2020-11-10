import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    message: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      flex: 1
    },
    message__img: {
      width: 200,
      resizeMode: 'contain'
    },
    message__text: {
      maxWidth: 250,
      textAlign: 'center'
    }
  });

const Message = () => {

      return (
        <View style={styles.message}>
            <Image style={styles.message__img} source={require('../assets/tv.png')} />
            <Text style={styles.message__text} >Для получения списка сериалов, пожалуйста, выберите необходимый месяц и день</Text>
        </View>
    );
}

export default Message;