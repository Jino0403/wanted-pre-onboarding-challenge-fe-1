import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        Copyright © Jino Lee. All Rights Reserved.
      </FooterContents>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 10%;
  bottom: 0;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const FooterContents = styled.div`
  width: 1000px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
