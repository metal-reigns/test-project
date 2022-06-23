import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import colors from "../config/colors";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <MainHD>
        <MainTextContainer>
          <MainHeader>HARLEY-DAVIDSON</MainHeader>
          <Text>
            Introducing the 2022 Harley-Davidson® Enthusiast Collection: an
            ongoing collection of H-D motorcycles that celebrates the diversity
            of our community and the unique backgrounds and interests of the
            people within it.
          </Text>
          <Button
            text="ПЕРЕЙТИ В ПРОФИЛЬ"
            style={{ width: 230, height: 50 }}
            click={() => navigate(auth ? "/profile" : "/login")}
          />
        </MainTextContainer>
      </MainHD>
      <Gradient />
      <ContentContainer>
        <div style={{ width: 297 }}>
          <Header>ПОПУЛЯРНЫЕ МОДЕЛИ</Header>
          <Line />
        </div>
        <div
          style={{
            marginTop: 117,
            display: "flex",
            gap: 70,
            alignItems: "center",
          }}
        >
          <Img />
          <MainTextContainer style={{ gap: 20, alignItems: "flex-start" }}>
            <Header style={{ fontSize: 24, color: colors.accent }}>
              New for 2022
            </Header>
            <BigHeader>NIGHTER</BigHeader>
            <Text style={{ width: 317, textAlign: "start" }}>
              An instrument of expression, a machine born from an icon of
              yesterday evolved for the riders of today.
            </Text>
            <Button
              text="ПОСЛЕДНИЕ НОВОСТИ"
              style={{ width: 230, height: 50 }}
              click={() => navigate("/news")}
            />
          </MainTextContainer>
        </div>
      </ContentContainer>
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

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;
const MainHeader = styled.h1`
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: ${colors.orangeMain};
`;

const Text = styled.div`
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: ${colors.textWhite};
  width: 616px;
`;

const Gradient = styled.div`
  background: linear-gradient(179.31deg, #2a2a2a 0.6%, #090c0f 99.4%);
  filter: blur(15px);
  width: 100%;
  height: 105px;
  position: relative;
  top: -25px;
`;

const ContentContainer = styled.div`
  height: 650px;
  padding: 70px 97px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: ${colors.textWhite};
`;

const Line = styled.div`
  border-top: 2px solid ${colors.orangeMain};
  width: 100%;
`;

const Img = styled.div`
  background-image: url("https://www.harley-davidson.com/content/dam/h-d/images/content-images/media-card/2022/nightster-homepage-media-card.jpg?impolicy=myresize&rw=800");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 900px;
  height: 550px;
  border-radius: 15px;
`;

const BigHeader = styled.h1`
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: ${colors.textWhite};
`;

export default Main;
