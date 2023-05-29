import React, { useState } from "react";
import { AccordionContainer, AccordionContent } from "./Accordian";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Lectures from "../lectures/Lectures";

const Accordion = ({ items }) => {
  const [active, setActive] = useState();

  const handleClick = (name) => {
    setActive(name === active ? null : name);
  };

  return (
    <ContentWrapper style={{ marginBottom: "50px" }}>
      <div className="sectionHeading">Course Content</div>
      <AccordionContainer>
        {items?.map((item, i, lectures) => {
          let isActive = active === item?.title;
          return (
            <AccordionContent
              key={item?._id}
              link={item?.video}
              onClick={() => handleClick(item?.title)}
              itemName={item?.title}
              itemContent={<Lectures lectures={lectures && lectures} />}
              isActive={isActive}
            />
          );
        })}
      </AccordionContainer>
    </ContentWrapper>
  );
};

export default Accordion;
