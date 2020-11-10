import React from 'react';
import {ScrollView, StyleSheet, FlatList, Pressable, Text, Dimensions} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Serial from '../components/Serial';

const styles = StyleSheet.create({
    container: { 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    schedule__button: {
        borderWidth: 2,
        borderColor: '#adadad',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        padding: 15,
        width: Dimensions.get("window").width - 40,
        margin: 20
    },
    schedule__button_text: {
        textAlign: 'center',
        color: '#adadad'
    },
    schedule__title: {
        fontSize: 20,
        width: '100%',
        textAlign: 'center',
        padding:20,
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9'
    }
});

const Item = ({item}) => (
    <Serial 
        image={item.show.image.medium}
        title={item.show.name}
        year={item.show.premiered.split('-')[0]}
        season={item.season}
        episode={item.number}
    />
  );

const quantity = 4
let tmp = []
let open = false;
let months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ];

const Schedule = (props) => {
    const [loading, setLoading] = React.useState(true);
    const [text, setText] = React.useState('');
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch(`http://api.tvmaze.com/schedule?country=US&date=${props.day.dateString}`)
        .then((response) => response.json())
        .then(data => {
            tmp = [...data];
            setData(data.slice(0, quantity));
            setText(`Еще ${data.length - 4} сериала`);
            setLoading(false);
        })
        .catch(err => console.error(err))
    }, [])

    const onPress = () => {
        if(!open) {
            setData(tmp)
            setText('Показать основные');
        }
        else {
            setData(data.slice(0, quantity));
            setText(`Еще ${data.length - 4} сериала`);
        }
        open = !open;
    }

    return (
        <>
                <Spinner
                visible={loading}
                textContent={'Loading...'}
                textStyle={{color: '#ffffff'}}
              /> 
            {!loading &&
                <>
                <FlatList
                    data={data}
                    renderItem={Item}
                    keyExtractor={item => item.id.toString()}
                    ListHeaderComponent={
                        <Text style={styles.schedule__title}>{props.day.day} {months[props.day.month - 1]} {props.day.year}</Text>
                    }
                    ListFooterComponent={
                        <>
                            <Pressable style={styles.schedule__button} onPress={onPress}>
                                <Text style={styles.schedule__button_text}>{text}</Text>
                            </Pressable>
                        </>
                    }
                />
                </>
            }
        </>
    );
}

export default Schedule;
