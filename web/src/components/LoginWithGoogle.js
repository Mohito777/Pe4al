// LoginWithGoogle.js
import React from "react";
import styled from "styled-components";
import { GoogleAuthProvider } from "firebase/auth"; // Импортируйте GoogleAuthProvider из правильного места
import useFirebase from "../utils/useFirebase";

const GoogleButton = styled.button`
  /* Ваши стили кнопки Google */
`;

const LoginWithGoogle = () => {
  const firebase = useFirebase();

  const handleGoogleLogin = async () => {
    try {
      // Вход с использованием Firebase через Google
      const provider = new GoogleAuthProvider(); // Используйте GoogleAuthProvider из правильного импорта
      await firebase.auth().signInWithPopup(provider);
      // Успешный вход - можете выполнить перенаправление на главную страницу или другие действия
    } catch (error) {
      // Обработка ошибок аутентификации
      console.error("Ошибка при входе через Google:", error);
    }
  };

  return (
    <GoogleButton onClick={handleGoogleLogin}>
      Войти с помощью Google
    </GoogleButton>
  );
};

export default LoginWithGoogle;
