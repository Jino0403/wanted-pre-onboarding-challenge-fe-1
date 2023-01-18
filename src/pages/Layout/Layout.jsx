import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  width: 1540px;
  height: 730px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cfc3b5;
  position: fixed;
`;
