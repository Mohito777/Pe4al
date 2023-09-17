// ButtonStyles.js
import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";

export const LoginFormContainer = styled.form`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #8e44ad, #3498db);
  margin-top: 50px; /* Добавляем отступ сверху */


`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
`;

export const OAuthButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px; /* Добавлено для разделения кнопок */
  &:hover {
    background-color: #2980b9;
  }
`;

export const GoogleIcon = styled(FaGoogle)`
  margin-right: 8px;
  font-size: 16px;
`;

export const GoogleButton = styled.button`
  background-color: #dd4b39;
  &:hover {
    background-color: #c0392b;
  }
`;

export const GitHubButton = styled(PrimaryButton)`
  background-color: #333;
  &:hover {
    background-color: #000;
  }
`;
