import React, { useState } from "react";
import { AccordionContainer, AccordionContent } from "./Accordian";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Lectures from "../lectures/Lectures";

const Accordion = ({ items }) => {
  const [active, setActive] = useState();

  const handleClick = (name) => {
    setActive(name === active ? null : name);
  };

  console.log(items);

  return (
    <AccordionContainer>
      {items?.map((item) => {
        let isActive = active === item?.caption;
        return (
          <AccordionContent
            key={item?._id}
            onClick={() => handleClick(item?.caption)}
            itemName={item?.caption}
            itemContent={<Lectures post={items && items} />}
            isActive={isActive}
          />
        );
      })}
    </AccordionContainer>
  );
};

export default Accordion;
