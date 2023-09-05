import styled from "styled-components";



const StyledGoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.textGrey};
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ButtonBackground = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.textGrey};
  border-radius: 6px;
`;

const ButtonCaption = styled.span`
  color: #fff;
`;

const ProviderName = styled.span`
  margin-left: 8px;
`;

const Icon = styled.svg`
  width: 20px;
  height: 21px;
  fill: #fff;
  margin-right: 8px;
`;

const GoogleButton = ({ onClick, children }) => {
  return (
    <StyledGoogleButton onClick={onClick}>
      <ButtonBackground>
        <Icon
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='21'
          fill='none'
        >
          {/* Здесь ваш SVG-код */}
        </Icon>
        <ButtonCaption>{children}</ButtonCaption>
      </ButtonBackground>
      <ProviderName>Google</ProviderName>
    </StyledGoogleButton>
  );
};

export default StyledGoogleButton;
