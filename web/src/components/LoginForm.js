import React, { useState } from "react";
import {
  LoginFormContainer,
  FormGroup,
  Input,
  PrimaryButton,
} from "../styles/typography/FormLoginStyles"; // Укажите правильный путь к стилям

function LoginForm({ onEmailLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    onEmailLogin(email, password);
  };

  return (
    <LoginFormContainer onSubmit={handleEmailSubmit}>
      <FormGroup>
        <label>Email:</label>
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <label>Password:</label>
        <Input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <PrimaryButton type='submit'>Sign In</PrimaryButton>
    </LoginFormContainer>
  );
}

export default LoginForm;
