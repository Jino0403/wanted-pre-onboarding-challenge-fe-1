import Layout from "../Layout/Layout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const onClickLogIn = () => {
    alert("환영합니다!");
    navigate("/");
  };

  const onClickSignUp = () => {
    navigate("/signup");
  };
  return (
    <Layout>
      <LogInContainer>
        <LogInTitle>MyTodoList</LogInTitle>
        <LogInBox>
          <LogInId>
            <LogInIdLabel>아이디</LogInIdLabel>
            <LogInIdInput placeholder="아이디를 입력해주세요" />
          </LogInId>
          <LogInPassword>
            <LogInPasswordLabel>비밀번호</LogInPasswordLabel>
            <LogInPasswordInput placeholder="비밀번호를 입력해주세요" />
          </LogInPassword>
        </LogInBox>
        <Buttons>
          <LogInButton onClick={onClickLogIn}>로그인</LogInButton>
          <SignUpButton onClick={onClickSignUp}>회원가입</SignUpButton>
        </Buttons>
      </LogInContainer>
    </Layout>
  );
};

export default LogIn;

const LogInContainer = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid white;
  border-radius: 3px;
  box-shadow: 0px 0px 1.5px;
`;
const LogInTitle = styled.div`
  width: 300px;
  height: 50px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #cfc3b5;
`;

const LogInBox = styled.div`
  width: 300px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const LogInId = styled.div`
  width: 300px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LogInIdLabel = styled.label`
  width: 55px;
  height: 20px;
  margin-bottom: 3px;
`;
const LogInIdInput = styled.input`
  width: 295px;
  height: 30px;
  border: 1px solid #cfc3b5;
  border-radius: 5px;
`;
const LogInPassword = styled.div`
  width: 300px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LogInPasswordLabel = styled.label`
  width: 70px;
  height: 20px;
  margin-bottom: 3px;
`;
const LogInPasswordInput = styled.input`
  width: 295px;
  height: 30px;
  border: 1px solid #cfc3b5;
  border-radius: 5px;
`;

const Buttons = styled.div`
  width: 300px;
  height: 40px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const LogInButton = styled.button`
  width: 140px;
  height: 40px;
  border: 1px solid #cfc3b5;
  border-radius: 5px;
  background-color: white;
  font-size: 20px;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;

const SignUpButton = styled.button`
  width: 140px;
  height: 40px;
  border: 1px solid #cfc3b5;
  border-radius: 5px;
  background-color: white;
  font-size: 20px;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;
