import { Routes, Route } from "react-router-dom";
import LogIn from "./Auth/LogIn";
import SignUp from "./Auth/SignUp";
import AddTodo from "./Main/AddTodo";
import DetailTodo from "./Main/DetailTodo";
import TodoList from "./Main/TodoList";

const MainPages = () => {
  return (
    <Routes>
      <Route path={"/"} element={<TodoList />} />
      <Route path={"/login"} element={<LogIn />} />
      <Route path={"/signup"} element={<SignUp />} />
      <Route path={"/addtodo"} element={<AddTodo />} />
      <Route path={"/detailtodo"} element={<DetailTodo />} />
    </Routes>
  );
};

export default MainPages;
