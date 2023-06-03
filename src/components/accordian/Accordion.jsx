import React, { useState } from "react";
import { AccordionContainer, AccordionContent } from "./Accordian";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Lectures from "../lectures/Lectures";
import VideoPopup from "../videoPopup/VideoPopup";

const Accordion = ({ sections }) => {
  const [active, setActive] = useState();

  const handleClick = (name) => {
    setActive(name === active ? null : name);
  };

  return (
    <ContentWrapper style={{ marginBottom: "50px" }}>
      <div className="sectionHeading">Course Content</div>
      <AccordionContainer>
        {sections?.map((section, i, sections) => {
          let isActive = active === section?._key;
          return (
            <AccordionContent
              key={section?._key}
              onClick={() => handleClick(section?._key)}
              itemName={section?.section}
              isActive={isActive}
              itemContent={<Lectures lectures={section?.lectures} />}
            />
          );
        })}
      </AccordionContainer>
    </ContentWrapper>
  );
};

export default Accordion;
