// FormLoginStyles.js

import styled, { ThemeProvider } from "styled-components";


export const LoginFormContainer = styled.form`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.3;
  box-sizing: inherit;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 90vh;
  max-width: 90%;
  width: 30rem;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 43px 7px;
  border-radius: 9px;
  border: none;
  padding: 4.5rem 2.5rem;
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
  width: 100%; /* Чтобы занимал всю доступную ширину */
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
