import React from "react";
import styled from "styled-components";
import useFirebase from "../utils/useFirebase"; // Импортируйте хук useFirebase

const GitHubButton = styled.button`
  // Ваши стили кнопки GitHub
`;

const LoginWithGitHub = () => {
  const firebase = useFirebase(); // Используйте хук useFirebase для доступа к Firebase

  const handleGitHubLogin = async () => {
    try {
      // Вход с использованием Firebase через GitHub
      const provider = new firebase.auth.GithubAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      // Успешный вход - можете выполнить перенаправление на главную страницу или другие действия
    } catch (error) {
      // Обработка ошибок аутентификации
      console.error("Ошибка при входе через GitHub:", error);
    }
  };

  return (
    <GitHubButton onClick={handleGitHubLogin}>
      Войти с помощью GitHub
    </GitHubButton>
  );
};

export default LoginWithGitHub;
