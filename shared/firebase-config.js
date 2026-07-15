// Вставь сюда конфиг своего проекта Firebase.
// Взять его можно в консоли Firebase: Project settings -> General -> "Your apps" -> Web app -> SDK setup and configuration.
// Это НЕ секретный ключ в привычном смысле — он предназначен для использования в браузере,
// реальная защита данных обеспечивается правилами доступа Firestore (см. README.md).

export const firebaseConfig = {
  apiKey: "ВСТАВЬ_СЮДА",
  authDomain: "ВСТАВЬ_СЮДА.firebaseapp.com",
  projectId: "ВСТАВЬ_СЮДА",
  storageBucket: "ВСТАВЬ_СЮДА.appspot.com",
  messagingSenderId: "ВСТАВЬ_СЮДА",
  appId: "ВСТАВЬ_СЮДА"
};

// Публичные STUN-сервера для WebRTC (обычно достаточно для сети офиса/дома).
// Если видеосвязь между админом и сотрудником не устанавливается из-за жёсткого
// firewall/NAT — потребуется добавить сюда ещё и TURN-сервер (см. README.md).
export const iceServers = [
  { urls: "stun:stun.l.google.com:19302" }
];
