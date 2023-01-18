import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../Layout/Layout";

const TodoList = () => {
  const navigate = useNavigate();

  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const onClickRecord = () => {
    alert("투두가 생성되었습니다");
  };

  const onClickDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      alert("삭제가 완료되었습니다.");
    } else {
      alert("삭제가 취소되었습니다.");
    }
  };
  return (
    <Layout>
      <TodoListContainer>
        <TodoListTitle>나의 투두리스트를 기록해보아요</TodoListTitle>
        <TodoListBox>
          <CreateBox>
            <TodoInput />
            <TodoRecordButton onClick={onClickRecord}>
              기록하기
            </TodoRecordButton>
          </CreateBox>
          <TodoBox>
            <Todo>
              <TodoContent>🎯 투두내용</TodoContent>
              <TodoButtons>
                <TodoEdit>수정</TodoEdit>
                <TodoDelete onClick={onClickDelete}>삭제</TodoDelete>
              </TodoButtons>
            </Todo>
          </TodoBox>
        </TodoListBox>
      </TodoListContainer>
    </Layout>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  width: 1000px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 3px;
  box-shadow: 0px 0px 1.5px;
  background-color: white;
`;

const TodoListTitle = styled.div`
  width: 900px;
  height: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const TodoListBox = styled.div`
  width: 900px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CreateBox = styled.div`
  width: 850px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TodoInput = styled.input`
  width: 750px;
  height: 40px;
  border: 1px solid #cfc3b5;
  border-radius: 5px;
`;
const TodoRecordButton = styled.button`
  width: 80px;
  height: 44px;
  border: 1px solid #cfc3b5;
  border-radius: 5px;
  background-color: white;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;

const TodoBox = styled.div`
  width: 850px;
  height: 430px;
`;

const Todo = styled.div`
  width: 850px;
  height: 40px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #cfc3b5;
  border-radius: 5px;
`;

const TodoContent = styled.div`
  width: 730px;
  height: 40px;
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

const TodoButtons = styled.div`
  width: 90px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TodoEdit = styled.button`
  width: 42px;
  height: 30px;
  border: 1px solid #cfc3b5;
  border-radius: 5px;
  background-color: white;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;
const TodoDelete = styled.button`
  width: 42px;
  height: 30px;
  border: 1px solid #cfc3b5;
  border-radius: 5px;
  background-color: white;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;
