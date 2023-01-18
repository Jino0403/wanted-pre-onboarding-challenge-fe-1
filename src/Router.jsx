import { BrowserRouter } from "react-router-dom";
import MainPages from "./pages/MainPages";

const Router = () => {
  return (
    <BrowserRouter>
      <MainPages />
    </BrowserRouter>
  );
};

export default Router;
