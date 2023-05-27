import React from "react";
import styled from "styled-components";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const AccordionContainer = styled.div`
  overflow: hidden;
  background-color: black;
  color: #f9f9f9;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1200px;
`;

const Inner = styled.div`
  background: #1c1c1c;
`;

const Header = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  font-size: 1rem;
  text-align: left;
  background: black;
  color: inherit;
  cursor: pointer;
  border: none;
`;

const HeaderIcon = styled.span`
  transform: rotate(${(props) => (props.isActive ? -180 : 0)}deg);
  transition: all 0.2s;
`;

const Content = styled.div`
  position: relative;
  overflow: hidden;
  height: ${(props) => {
    const inner = document.getElementById(props.itemName);
    return `${props.isActive && inner ? inner.clientHeight : 0}px`;
  }};
  transition: height 0.35s;
`;

const AccordionContent = ({ onClick, itemName, itemContent, isActive }) => {
  return (
    <>
      <Header onClick={onClick}>
        {itemName}
        <IoMdArrowDropdownCircle></IoMdArrowDropdownCircle>
      </Header>

      <Content itemName={itemName} isActive={isActive}>
        <Inner id={itemName}>{itemContent}</Inner>
      </Content>
    </>
  );
};

export { AccordionContainer, AccordionContent };
