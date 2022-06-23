import React from "react";
import styled from "styled-components";
import colors from "../config/colors";

const NotFound = () => {
  return (
    <>
      <MainHD>
        <MainHeader>404 HARLEY-DAVIDSON NOT FOUND</MainHeader>
      </MainHD>
      <Gradient />
    </>
  );
};

const MainHD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(
      0deg,
      rgba(9, 12, 15, 0.5),
      rgba(9, 12, 15, 0.5)
    ),
    url("https://images.unsplash.com/photo-1617719445910-effa370eea18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const MainHeader = styled.h1`
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: ${colors.orangeMain};
`;

const Gradient = styled.div`
  background: linear-gradient(179.31deg, #2a2a2a 0.6%, #090c0f 99.4%);
  filter: blur(15px);
  width: 100%;
  height: 105px;
  position: relative;
  top: -25px;
`;
export default NotFound;
