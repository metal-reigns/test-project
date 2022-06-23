import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button";
import colors from "../config/colors";
import userCredentials from "../config/config";
import { setAuth } from "../redux/auth/auth_reducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    if (input.name === "login") setLogin(value);
    else setPassword(value);
  };

  const handleFormSubmit = () => {
    if (
      login === userCredentials.login &&
      password === userCredentials.password
    ) {
      localStorage.setItem("isAuth", true);
      dispatch(setAuth(true));
      setError("");
      setLogin("");
      setPassword("");
    } else {
      setError("Неверный логин или пароль");
    }
  };

  const signOut = () => {
    localStorage.setItem("isAuth", false);
    dispatch(setAuth(false));
  };

  return (
    <>
      {auth ? (
        <>
          <Container>
            <MainHeader>ВЫ ВОШЛИ</MainHeader>
            <Button
              style={{ width: 230, height: 50 }}
              text="ПЕРЕЙТИ В ПРОФИЛЬ"
              click={() => navigate("/profile")}
            />
          </Container>
          <Gradient />
        </>
      ) : (
        <>
          <Container>
            <Form>
              <Title>Вход</Title>
              <Input
                name="login"
                placeholder="Логин"
                value={login}
                onChange={handleChange}
              />
              <div>
                <Input
                  placeholder="Пароль"
                  type="password"
                  value={password}
                  onChange={handleChange}
                />
                <ErrorText>{error}</ErrorText>
              </div>
              <Button
                style={{ width: 148, height: 50 }}
                text="ВОЙТИ"
                click={handleFormSubmit}
              />
            </Form>
          </Container>
          <Gradient />
        </>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(
      0deg,
      rgba(9, 12, 15, 0.5),
      rgba(9, 12, 15, 0.5)
    ),
    url("https://images.unsplash.com/photo-1481567758055-3e8a6e89ca58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
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

const Form = styled.div`
  width: 467px;
  height: 387px;
  background: rgba(9, 12, 15, 0.66);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Title = styled.div`
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: ${colors.textWhite};
`;
const Input = styled.input`
  box-sizing: border-box;
  width: 359px;
  height: 50px;
  outline: 1px solid ${colors.textWhite};
  border-radius: 15px;
  background-color: transparent;
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  padding: 15px;
  color: ${colors.textWhite};
  :focus {
    outline: 1px solid ${colors.orangeMain};
  }
`;
const ErrorText = styled.div`
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: red;
`;
const Gradient = styled.div`
  background: linear-gradient(179.31deg, #091b1f 0.6%, #090c0f 99.4%);
  filter: blur(15px);
  width: 100%;
  height: 105px;
  position: relative;
  top: -25px;
`;

export default Login;
