import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Main from "./pages/Main";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import colors from "./config/colors";
import Button from "./components/Button";
import { setAuth } from "./redux/auth/auth_reducer";

export default function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);

  const signOut = () => {
    localStorage.setItem("isAuth", false);
    dispatch(setAuth(false));
  };

  return (
    <Container>
      <HeaderContainer>
        <Phone>Телефон: +375 25 928 72 43</Phone>

        <MenuContainer>
          <MenuItem>
            <Link to="/">Главная</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/news">Новости</Link>
          </MenuItem>
          <MenuItem>
            <Link to={auth ? "/profile" : "/login"}>Профиль</Link>
          </MenuItem>
        </MenuContainer>

        <LoginContainer>
          <MenuItem>
            <Link to="/login">Войти</Link>
          </MenuItem>

          <Button
            text="Выйти"
            style={{ fontSize: 18, fontWeight: 400, height: 38, width: 90 }}
            click={signOut}
          />
        </LoginContainer>
      </HeaderContainer>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <FooterGradient />
      <FooterContainer />
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.background};
`;
const HeaderContainer = styled.div`
  position: absolute;
  padding: 40px 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: -webkit-fill-available;
`;

const Phone = styled.span`
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: ${colors.textWhite};
`;

const MenuContainer = styled.div`
  display: flex;
  width: 270px;
  justify-content: space-between;
`;
const MenuItem = styled.div`
  a {
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  width: 145px;
  justify-content: space-between;
  align-items: center;
`;

const FooterGradient = styled.div`
  background: linear-gradient(179.31deg, #080a0d 0.6%, #090c0f 99.4%);
  filter: blur(15px);
  width: 100%;
  height: 105px;
  position: relative;
  top: 45px;
`;

const FooterContainer = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(9, 12, 15, 0.63),
      rgba(9, 12, 15, 0.63)
    ),
    url("https://images.unsplash.com/photo-1589658102464-1d1150dd8f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  height: 510px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
