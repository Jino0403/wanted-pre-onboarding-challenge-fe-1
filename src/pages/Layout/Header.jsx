import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  const onClickMain = () => {
    navigate("/");
  };

  const onClickLogIn = () => {
    navigate("/login");
  };

  const onClickSignUp = () => {
    navigate("/signup");
  };

  return (
    <HeaderContainer>
      <Title onClick={onClickMain}>MyTodoList</Title>
      <Buttons>
        <LogIn onClick={onClickLogIn}>로그인</LogIn>
        <SignUp onClick={onClickSignUp}>회원가입</SignUp>
      </Buttons>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  width: 90px;
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Buttons = styled.div`
  width: 140px;
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const LogIn = styled.div`
  width: 50px;
  height: 20px;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;

const SignUp = styled.div`
  width: 65px;
  height: 20px;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;
