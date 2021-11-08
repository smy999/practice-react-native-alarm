import React, { useState } from 'react';
import Notifications from './Notifications';
import { Button, StyleSheet, View, Text } from 'react-native';
import moment from 'moment';

const App = () => {

  
  let startDate = moment('2021-11-08').toDate();
  let endDate = moment('2021-11-08').toDate();
  let title = "감기약"
  let medi = "부르펜"
  startDate.setHours(15)
  startDate.setMinutes(28)
  startDate.setSeconds(0)
  endDate.setHours(15)
  endDate.setMinutes(30)
  endDate.setSeconds(0)
  let cur = startDate;
  let end = endDate;

  // 시작 설정 분 부터 끝나는 분까지 while문 돌려서 집어넣기
  const setNotification = () => {
    id = 0;
    while (cur <= end) {
      Notifications.scheduledLocalNotifications(id, cur, title, medi)
      id++
      cur = moment(cur).add(1, 'm').toDate()
    }
  }

  const getNotification = () => {
    // Notifications.deleteNotifications();
    Notifications.getScheduledLocalNotifications();
  }

  const getList = () => {
    Notifications.getList();
  }

  return (
    <View style={ styles.container }>
      <Button
        title="Set notification"
        onPress={setNotification}
      />
      <Text>------------------------------</Text>
      <Button
        title="get notification"
        onPress={getNotification}
      />
      <Text>------------------------------</Text>
      <Button
        title="get list"
        onPress={getList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
