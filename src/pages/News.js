import React from "react";
import styled from "styled-components";
import NewsCard from "../components/NewsCard";
import colors from "../config/colors";

const News = () => {
  const news = [
    {
      id: "1",
      title: "Harley-Davidson Driving Lessons",
      date: "9 апреля 2019",
      text: "27.04.2019г.  Салон Harley-Davidson Minsk, совместно с мотошколой Keymotoschool, проводит день  Harley-Davidson Driving Lessons - Только  для  клиентов салона Harley-Davidson Minsk! Вы сможете улучшить свои навыки езды на мотоцикле, вспомнить после зимы технику и принципы вождения мотоцикла, и самое главное сделать это всё на идеально оборудованной для этого площадке в мотошколе Keymotoschool, под  руководством опытного инструктора Дмитрия Евхименко...",
      img: "https://dw4i9za0jmiyk.cloudfront.net/2019/04/09/news_re1b38a9179894048c7721f62394b5b4_ad2b9bbd1fb0.jpg",
    },
    {
      id: "2",
      title: "Harley-Davidson Driving Lessons",
      date: "9 апреля 2019",
      text: "27.04.2019г.  Салон Harley-Davidson Minsk, совместно с мотошколой Keymotoschool, проводит день  Harley-Davidson Driving Lessons - Только  для  клиентов салона Harley-Davidson Minsk! Вы сможете улучшить свои навыки езды на мотоцикле, вспомнить после зимы технику и принципы вождения мотоцикла, и самое главное сделать это всё на идеально оборудованной для этого площадке в мотошколе Keymotoschool, под  руководством опытного инструктора Дмитрия Евхименко...",
      img: "https://dw4i9za0jmiyk.cloudfront.net/2019/01/11/news_b3921fa8cea159ad59fd0bc83b9df5fb_355771fa9ba4.jpg",
    },
    {
      id: "3",
      title: "Harley-Davidson Driving Lessons",
      date: "9 апреля 2019",
      text: "27.04.2019г.  Салон Harley-Davidson Minsk, совместно с мотошколой Keymotoschool, проводит день  Harley-Davidson Driving Lessons - Только  для  клиентов салона Harley-Davidson Minsk! Вы сможете улучшить свои навыки езды на мотоцикле, вспомнить после зимы технику и принципы вождения мотоцикла, и самое главное сделать это всё на идеально оборудованной для этого площадке в мотошколе Keymotoschool, под  руководством опытного инструктора Дмитрия Евхименко...",
      img: "https://dw4i9za0jmiyk.cloudfront.net/2018/11/08/news_p80981b1436dee753e96bb456a867e55_efc4d071a91e.jpg",
    },
    {
      id: "4",
      title: "Harley-Davidson Driving Lessons",
      date: "9 апреля 2019",
      text: "27.04.2019г.  Салон Harley-Davidson Minsk, совместно с мотошколой Keymotoschool, проводит день  Harley-Davidson Driving Lessons - Только  для  клиентов салона Harley-Davidson Minsk! Вы сможете улучшить свои навыки езды на мотоцикле, вспомнить после зимы технику и принципы вождения мотоцикла, и самое главное сделать это всё на идеально оборудованной для этого площадке в мотошколе Keymotoschool, под  руководством опытного инструктора Дмитрия Евхименко...",
      img: "https://dw4i9za0jmiyk.cloudfront.net/2018/05/10/news_f7601ae831bf91c416942d7f346943de_844259c2e5a3.jpg",
    },
    {
      id: "5",
      title: "Harley-Davidson Driving Lessons",
      date: "9 апреля 2019",
      text: "27.04.2019г.  Салон Harley-Davidson Minsk, совместно с мотошколой Keymotoschool, проводит день  Harley-Davidson Driving Lessons - Только  для  клиентов салона Harley-Davidson Minsk! Вы сможете улучшить свои навыки езды на мотоцикле, вспомнить после зимы технику и принципы вождения мотоцикла, и самое главное сделать это всё на идеально оборудованной для этого площадке в мотошколе Keymotoschool, под  руководством опытного инструктора Дмитрия Евхименко...",
      img: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "6",
      title: "Harley-Davidson Driving Lessons",
      date: "9 апреля 2019",
      text: "27.04.2019г.  Салон Harley-Davidson Minsk, совместно с мотошколой Keymotoschool, проводит день  Harley-Davidson Driving Lessons - Только  для  клиентов салона Harley-Davidson Minsk! Вы сможете улучшить свои навыки езды на мотоцикле, вспомнить после зимы технику и принципы вождения мотоцикла, и самое главное сделать это всё на идеально оборудованной для этого площадке в мотошколе Keymotoschool, под  руководством опытного инструктора Дмитрия Евхименко...",
      img: "https://images.unsplash.com/photo-1587331833452-c9bf082e6c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",
    },
  ];
  return (
    <Container>
      <div style={{ width: 288 }}>
        <Header>ПОСЛЕДНИЕ НОВОСТИ</Header>
        <Line />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 30 }}>
        {news.map((item) => {
          return (
            <NewsCard
              key={item.id}
              title={item.title}
              date={item.date}
              text={item.text}
              img={item.img}
            />
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 120px 98px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 80px;
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

export default News;
