import React from "react";
import styled from "styled-components";
import colors from "../config/colors";

const Button = ({ text, style, click }) => {
  return (
    <ButtonContainer style={style} onClick={click}>
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  cursor: pointer;
  background-color: ${colors.orangeMain};
  border-radius: 15px;
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: ${colors.textWhite};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Button;
