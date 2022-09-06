import React, { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Lecture from "./Lecture";
import { myAccordionContext } from "./CourseContent";

const getLectures = (lectures) => {
  return lectures.map((el, index) => {
    return <Lecture lecture={el} />;
  });
};

const isExpanded = (expandedList, id) => {
  for (let i = 0; i < expandedList.length; i++) {
    if (expandedList[i].id.toString() === id.toString())
      return expandedList[i].expanded;
  }
};

const handleChange = (data, id) => {
  console.log(id);
  console.log(data);
  data.toggleExpand(id);
};

export default function MyAccordion(props) {
  const data = useContext(myAccordionContext);

  return (
    <Accordion
      className="accordion"
      expanded={isExpanded(data.expandedList, props.id)}
      onChange={() => {
        handleChange(data, props.id);
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
        dir="rtl"
      >
        <div
          className="d-flex justify-content-between align-items-center w-100"
          dir="ltr"
        >
          <div>
            <strong className="ms-2">{props.title}</strong>
          </div>

          <div style={{ color: "rgba(0, 0, 0, 0.65)" }}>
            {props.lectures.length} lectures • {props.totalTime}
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails className="content">
        {getLectures(props.lectures)}
      </AccordionDetails>
    </Accordion>
  );
}
