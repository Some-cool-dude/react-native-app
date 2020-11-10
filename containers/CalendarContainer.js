import React from 'react';
import {Dimensions} from 'react-native';
import {Calendar} from 'react-native-calendars';
import { Actions } from 'react-native-router-flux'

const CalendarContainer = () => {

    let height = Dimensions.get('window').width / 7;

      return (
        <Calendar
            monthFormat={'MMMM'}
            hideDayNames={true}

            onDayPress={(day) => {Actions.schedule({day: day})}}

            theme={{
                arrowColor: '#72797f',
                'stylesheet.calendar.main': {
                    container: {
                        backgroundColor: '#f1f1f1',
                        flex: 0
                      },
                    week: {
                        marginTop: 0,
                        marginBottom: 0,
                        flexDirection: 'row',
                    }
                },
                'stylesheet.day.basic': {
                    base: {
                        width: '100%',
                        height: height,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        borderWidth: 1,
                        borderColor: '#f1f1f1'
                    },
                    today: {
                        backgroundColor: '#ffffff',
                        borderRadius: 0,
                        borderWidth: 1,
                        borderColor: '#e01050'
                    },
                    todayText: {
                        color: 'black',
                        fontWeight: 'bold'
                    }
                }
              }}

            
        />
    );
}

export default CalendarContainer;