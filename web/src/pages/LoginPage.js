import React from "react";
import { Link } from "gatsby";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import styled from "styled-components";
import GoogleButton from "../styles/StyledGoogleButton";
import { FaGoogle, FaGithub } from "react-icons/fa";
import LoginForm from "../components/LoginForm";
import "firebase/auth";
import useFirebase from "../utils/useFirebase";


const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #f0f0f0;
  color: #333;
  cursor: pointer;
  margin-top: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ccc;
  }
`;

const LoginPage = () => {
  
  const firebase = useFirebase();

  const handleEmailLogin = async (email, password) => {
    // Обработка входа через email и пароль
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Вход успешен!");
      // Добавьте здесь перенаправление на главную страницу или другие действия после успешного входа.
    } catch (error) {
      console.error("Ошибка при входе через email и пароль:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Вход с использованием Firebase через Google
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      // Успешный вход - можете выполнить перенаправление на главную страницу или другие действия
    } catch (error) {
      // Обработка ошибок аутентификации
      console.error("Ошибка при входе через Google:", error);
    }
  };

  const handleGitHubLogin = async () => {
    // Обработка входа через GitHub
    // ...
  };

  return (
    <ThemeProvider theme={theme}>
      <LoginPageContainer>
        <h1>Вход</h1>
        <LoginForm onEmailLogin={handleEmailLogin} />
        <GoogleButton onClick={handleGoogleLogin}>
          <FaGoogle /> Войти с помощью Google
        </GoogleButton>
        <LoginButton onClick={handleGitHubLogin}>
          <FaGithub /> Войти с помощью GitHub
        </LoginButton>
        <p>
          <h3>
            Если вы ещё не зарегистрированы, пожалуйста
            <Link to='/register'>  Зарегистрируйтесь</Link>
          </h3>
        </p>
      </LoginPageContainer>
    </ThemeProvider>
  );
};

export default LoginPage;
