import React, { useState } from "react";
import { Title } from "../components/typography/Title";
import PageSpace from "../components/PageSpace";
import SEO from "../components/SEO";
import { FormGroup, Input, PrimaryButton } from "../styles/typography/FormLoginStyles";
import useFirebase from "../utils/useFirebase";

const RegistrationPage = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegistration = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Регистрация прошла успешно, вы можете выполнить перенаправление на другую страницу
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <SEO title='Регистрация' />
      <PageSpace top={80} bottom={100}>
        <div className='container'>
          <Title>Регистрация</Title>
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
          <PrimaryButton onClick={handleRegistration}>
            Зарегистрироваться
          </PrimaryButton>
        </div>
      </PageSpace>
    </div>
  );
};

export default RegistrationPage;
