import styled from "styled-components";

const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);

  .modal__content {
    padding: 20px;
    border-radius: 14px;
    background-color: white;
    position: absolute;
    top: 50%;
  }
`;
