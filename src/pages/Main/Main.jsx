import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const onClickMain = () => {
    navigate("/TodoList");
  };
  return (
    <>
      <div>환영합니다</div>
      <button onClick={onClickMain}>이동</button>
    </>
  );
};

export default Main;
