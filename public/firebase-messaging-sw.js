importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js',
);

const firebaseConfig = {
  apiKey: 'AIzaSyB7nGc5-K2aR39A8ER9bQFh4viTxyHn1k0',
  authDomain: 'mombo-79b2d.firebaseapp.com',
  projectId: 'mombo-79b2d',
  storageBucket: 'mombo-79b2d.appspot.com',
  messagingSenderId: '612645884313',
  appId: '1:612645884313:web:5422131fb6c49ca6f0c308',
  measurementId: 'G-LPZPKDZX2W',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification.title + ' (onBackgroundMessage)';
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://avatars.githubusercontent.com/sasha1107',
  };

  self.registration.showNotification(title, notificationOptions);
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  const redirectUrl = event?.notification?.data?.redirectUrl;

  event.waitUntil(
    clients
      .matchAll({
        type: 'window',
      })
      .then(function (clientList) {
        for (const client of clientList) {
          if (client.url === redirectUrl && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(redirectUrl);
        }
      }),
  );
});
