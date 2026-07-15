// firebase.js
// Конфиг проекта Firebase "pulsewt".
// Это НЕ секретный ключ в привычном смысле — он предназначен для использования в браузере,
// реальная защита данных обеспечивается правилами доступа Firestore (см. README.md).

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
  // Если видео не подключается за жёстким NAT/firewall — раскомментируй и впиши
  // свои данные с openrelay.metered.ca (см. README):
  // ,{ urls: "turn:openrelay.metered.ca:80", username: "openrelayproject", credential: "openrelayproject" }
];
