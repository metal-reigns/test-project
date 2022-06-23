import React from "react";
import styled from "styled-components";
import colors from "../config/colors";

const NewsCard = ({ title, date, text, img }) => {
  return (
    <Container>
      <Img img={img} />
      <ContentContainer>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Text>{text}</Text>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 570px;
  height: 655px;
  background: #1c1d1f;
  border-radius: 15px;
`;

const Img = styled.div`
  width: 570px;
  height: 306px;
  border-radius: 15px 15px 0px 0px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => (props.img ? props.img : "")});
`;

const ContentContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.span`
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: ${colors.textWhite};
`;
const Date = styled.span`
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: ${colors.textWhite};
`;
const Text = styled.span`
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.textWhite};
`;
export default NewsCard;
