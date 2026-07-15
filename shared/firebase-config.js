// firebase.js
// Конфиг проекта Firebase "pulsewt".
// Это НЕ секретный ключ в привычном смысле — он предназначен для использования в браузере,
// реальная защита данных обеспечивается правилами доступа Firestore (см. README.md).

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyBpz0thdMXImaEJCnt6yoPwR7H2PCbFE0k",
  authDomain: "pulsewt.firebaseapp.com",
  projectId: "pulsewt",
  storageBucket: "pulsewt.firebasestorage.app",
  messagingSenderId: "748924811708",
  appId: "1:748924811708:web:29a65238e70704be1793b9",
  measurementId: "G-HRCD87W2BC"
};

// Публичные STUN-сервера для WebRTC (обычно достаточно для сети офиса/дома).
// Если видеосвязь между админом и сотрудником не устанавливается из-за жёсткого
// firewall/NAT — потребуется добавить сюда ещё и TURN-сервер (см. README.md).
export const iceServers = [
  { urls: "stun:stun.l.google.com:19302" }
];

// Инициализация Firebase
export const app = initializeApp(firebaseConfig);

// Analytics работает только в браузере и только если поддерживается —
// поэтому включаем через isSupported(), чтобы не падало в SSR/Node
export let analytics = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});
