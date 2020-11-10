import React from 'react';
import {Text, Image, View, StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    serial: {
        display: 'flex',
        flexDirection: 'row',
        height: 150,
        marginTop: 20,
        width: Dimensions.get("window").width - 140
    },      
    serial__img: {
        height: '100%',
        width: 100,
        marginRight: 20,
        marginLeft: 20
    },
    serial__text: {
        position: 'relative',
        height: '100%',
        width: '100%'
    },
    serial__season: {
        backgroundColor: '#f5f5f5',
        color: '#b8b8b8',
        borderRadius: 5,
        padding: 15,
        position: 'absolute',
        bottom: 0
    }
  });

const Serial = (props) => {
    return (
        <View style={styles.serial}>
            <View style={styles.serial__img}>
                <Image style={{width: '100%', height:'100%', borderRadius:5}} source={{uri: props.image}} />
            </View>
            <View style={styles.serial__text}>
                <Text style={{fontSize: 20}} ellipsizeMode='tail' numberOfLines={1}>{props.title}</Text>
                <Text style={{color: '#b4b4b4'}}>{props.year}</Text>
                <Text style={styles.serial__season}>Season: {props.season}    Episode: {props.episode}</Text>
            </View>
        </View>
    );
}

export default Serial;
