import Layout from "../Layout/Layout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();

  // 상태관리를 위한 내부값 초기 셋팅
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // 오류메세지 상태 저장
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 유효성 검사

  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("아이디는 4~12 사이 대소문자 또는 숫자만 입력해주세요.");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 아이디입니다.");
      setIsId(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);

    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage("숫자+영문+특수문자 조합으로 8~16자리 입력해주세요.");
      setIsPassword(false);
    } else {
      setPasswordMessage("사용가능한 비밀번호입니다.");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);

    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage(
        "비밀번호가 일치하지 않습니다. 확인해서 다시 맞게 입력해주세요"
      );
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("일치하는 비밀번호입니다.");
      setIsPasswordConfirm(true);
    }
  };

  const onClickBeforeLogIn = () => {
    navigate("/login");
  };

  const onClickSignUp = () => {
    alert("회원가입이 완료되었습니다");
    navigate("/login");
  };
  return (
    <Layout>
      <SignUpContainer>
        <SignUpTitle>MyTodoList 회원가입</SignUpTitle>
        <SignUpform>
          <Id>
            <IdLabel>아이디</IdLabel>
            <IdInput
              placeholder="아이디를 입력해주세요"
              type="text"
              value={id}
              onChange={onChangeId}
            />
            <SignUpMessage>{idMessage}</SignUpMessage>
          </Id>
          <Password>
            <PasswordLabel>비밀번호</PasswordLabel>
            <PasswordInput
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
            <SignUpMessage>{passwordMessage}</SignUpMessage>
          </Password>
          <PasswordCheck>
            <PasswordCheckLabel>비밀번호 재확인</PasswordCheckLabel>
            <PasswordCheckInput
              placeholder="비밀번호를 한번 더 입력해주세요"
              type="password"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
            <SignUpMessage>{passwordConfirmMessage}</SignUpMessage>
          </PasswordCheck>
        </SignUpform>
        <SignUpComplete>
          <SignUpButton type="submit" onClick={onClickSignUp}>
            가입하기
          </SignUpButton>
          <BeforeComment>
            이전에 가입하신 적이 있다면?
            <BeforeLogIn onClick={onClickBeforeLogIn}>로그인</BeforeLogIn>
          </BeforeComment>
        </SignUpComplete>
      </SignUpContainer>
    </Layout>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  width: 400px;
  height: 550px;
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

const SignUpTitle = styled.div`
  width: 320px;
  height: 70px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  color: #cfc3b5;
`;

const SignUpform = styled.div`
  width: 320px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SignUpMessage = styled.div`
  width: 297px;
  height: 30px;
  margin-top: 3px;
  display: flex;
  justify-content: center;
  font-size: 10px;
`;

const Id = styled.div`
  width: 300px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const IdLabel = styled.label`
  width: 50px;
`;
const IdInput = styled.input`
  width: 292px;
  height: 30px;
  border: 1px solid #cfc3b5;
  border-radius: 5px;
  text-indent: 3px;

  &:focus {
    outline: none;
  }
`;
const Password = styled.div`
  width: 300px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const PasswordLabel = styled.label`
  width: 65px;
`;
const PasswordInput = styled.input`
  width: 292px;
  height: 30px;
  border: 1px solid #cfc3b5;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;
const PasswordCheck = styled.div`
  width: 300px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PasswordCheckLabel = styled.label`
  width: 120px;
`;
const PasswordCheckInput = styled.input`
  width: 292px;
  height: 30px;
  border: 1px solid #cfc3b5;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

const SignUpComplete = styled.div`
  width: 322px;
  height: 80px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUpButton = styled.button`
  width: 300px;
  height: 35px;
  border: 1px solid #cfc3b5;
  border-radius: 5px;
  background-color: white;
  font-size: 20px;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;

const BeforeComment = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const BeforeLogIn = styled.span`
  width: 100%;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;
