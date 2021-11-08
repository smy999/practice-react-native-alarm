import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';


class Notifications {
  constructor() {
    PushNotification.configure({
      // 토큰이 생성될 때 호출
      onRegister: function (token) {
        console.log( 'TOKEN:', token );
      },
      // 리모컨이 수신되거나 열리거나 로컬 알람이 열릴때 호출
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
      },

      popInitialNotification: true,
      // requestPermissions: true,
      requestPermissions: Platform.OS === 'ios',

      // IOS ONLY
      permissions: {
        alert: true,
        badge: false,
        sound: false,
      },
    });

    PushNotification.createChannel(
      {
        channelId: 'com.alarmtest',
        channelName: 'com.alarmtest',
        channelDescription: 'com.alarmtest'
      },
      () => { },
    );

    
  }
  getScheduledLocalNotifications() {
    PushNotification.getScheduledLocalNotifications(rn => {
      console.log('SN --- ', rn);
    });
  }

  getList() {
    PushNotification.getDeliveredNotifications(rn => {
      console.log(rn);
    });
  }

  scheduledLocalNotifications(id, date, title, medi) {
    console.log("hi")
    PushNotification.localNotificationSchedule({
      id: id, // 알람 내부 id
      channelId: 'com.alarmtest', // 채널 아이디 동기화
      title: title,
      message: medi+` 복용 시간입니다!`,
      playSound: true,
      date: date,
    });
    console.log(PushNotification)
  }

  deleteNotifications() {
    PushNotification.cancelAllLocalNotifications();
  }
}

export default new Notifications();
