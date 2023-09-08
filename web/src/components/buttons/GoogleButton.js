
import React from "react";
import styled from "styled-components";
import { FaGoogle, FaGithub } from "react-icons/fa";
import useFirebase from "../../utils/firebase";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const GoogleButton = () => {
  const firebase = useFirebase();

  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      // Вход выполнен успешно, вы можете выполнить перенаправление на другую страницу
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledButton
      style={{ backgroundColor: "#dd4b39" }}
      onClick={handleGoogleLogin}
    >
      <FaGoogle style={{ marginRight: "8px", fontSize: "16px" }} />
      Регистрация через Google
    </StyledButton>
  );
};

const GitHubButton = () => {
  const firebase = useFirebase();

  const handleGitHubLogin = async () => {
    try {
      const provider = new firebase.auth.GithubAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      // Вход выполнен успешно, вы можете выполнить перенаправление на другую страницу
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledButton
      style={{ backgroundColor: "#333" }}
      onClick={handleGitHubLogin}
    >
      <FaGithub style={{ marginRight: "8px", fontSize: "16px" }} />
      Войти через GitHub
    </StyledButton>
  );
};

export { GoogleButton, GitHubButton };
