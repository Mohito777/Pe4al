import React, { useState } from "react";
import { Title } from "../components/typography/Title";
import PageSpace from "../components/PageSpace";
import SEO from "../components/SEO";
import {
  FormGroup,
  Input,
  PrimaryButton,
  LoginFormContainer,
   GoogleButton,
  GitHubButton,
  GoogleIcon,
  StyledGoogleButton
} from "../styles/typography/FormLoginStyles";
import useFirebase from "../utils/useFirebase";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LoginPage = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Вход выполнен успешно, вы можете выполнить перенаправление на другую страницу
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      // Вход выполнен успешно, вы можете выполнить перенаправление на другую страницу
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGitHubLogin = async () => {
    try {
      const provider = new firebase.auth.GithubAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      // Вход выполнен успешно, вы можете выполнить перенаправление на другую страницу
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <SEO title='Вход' />
      <PageSpace top={80} bottom={100}>
        <LoginFormContainer>
          <Title>Вход</Title>
          {error && <div className='error-message'>{error}</div>}
          <FormGroup>
            <label>Email:</label>
            <Input
              type='email'
              placeholder='Введите ваш email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label>Пароль:</label>
            <Input
              type='password'
              placeholder='Введите пароль'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <PrimaryButton onClick={handleLogin}>
            Зарегистрироваться
          </PrimaryButton>
          <div className='google-button' onClick={handleGoogleLogin}>
            
            <GoogleButton />Регистрация через Google
          </div>
          <div className='github-button' onClick={handleGitHubLogin}>
            <FaGithub style={{ marginRight: "8px", fontSize: "16px" }} />
            <GitHubButton />Регистрация через GitHub
          </div>
        </LoginFormContainer>
      </PageSpace>
    </div>
  );
};

export default LoginPage;
