import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../common/components/Card";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h3``;

const Input = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 1px solid grey;
  padding: 0 10px;
  background-color: white !important;

  &:focus {
    outline: none;
    background-color: none;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 30px white inset !important;
  }
  &:-webkit-autofill:hover {
    box-shadow: 0 0 0 30px white inset !important;
  }
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 30px white inset !important;
  }
`;

const Form = styled.form`
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  border: none;

  &:hover {
    transform: scale(1.1);
    color: white;
    background-color: black;
  }
`;

const Login = () => {
  const loginRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();

    navigate("/dashboard");

    passwordRef.current.value = "";
    loginRef.current.value = "";
  };

  return (
    <Wrapper>
      <Card>
        <LoginWrapper>
          <Title>Login to TaskManager</Title>
          <Form onSubmit={(e) => handleLogin(e)}>
            <Input ref={loginRef} placeholder="E-Mail" />
            <Input ref={passwordRef} type="password" placeholder="Password" />
            <Button type="submit">Sign In</Button>
          </Form>
        </LoginWrapper>
      </Card>
    </Wrapper>
  );
};

export default Login;
