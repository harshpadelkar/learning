import React from "react";
import styled from "styled-components";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import "./style.scss";

const AccordionContainer = styled.div`
  overflow: hidden;
  color: #f9f9f9;
  margin: 0 auto;
  max-width: 1200px;
`;

const Inner = styled.div`
  background: #1c1c1c;
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
      <div className="accordianHeader" onClick={onClick}>
        {itemName}
        <IoMdArrowDropdownCircle />
      </div>

      <Content itemName={itemName} isActive={isActive}>
        <Inner id={itemName}>{itemContent}</Inner>
      </Content>
    </>
  );
};

export { AccordionContainer, AccordionContent };
