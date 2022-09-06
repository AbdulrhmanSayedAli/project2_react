import React, { createContext, useContext, useState } from "react";
import { SimpleCourseContext } from "../../../../pages/CoursePage";
import MyAccordion from "./MyAccordion";

const getAccordions = (courseSections, expanded) => {
  return courseSections.map((el, index) => {
    return (
      <MyAccordion
        id={`${el.id}`}
        title={el.title}
        totalTime={el.totalTime}
        lectures={el.lectures}
        expanded={expanded}
      />
    );
  });
};

const getDefaultExpandedList = (courseSections) => {
  return courseSections.map((el, index) => {
    return { id: el.id, expanded: false };
  });
};

export const myAccordionContext = createContext();

export default function CourseContent() {
  const course = useContext(SimpleCourseContext);
  const courseContent = course.courseContent;

  const [expandedList, setExpandedList] = useState(
    getDefaultExpandedList(courseContent.sections)
  );

  const ExpandAll = () => {
    const newList = [...expandedList];
    for (let i = 0; i < newList.length; i++) {
      newList[i].expanded = true;
    }
    setExpandedList(newList);
  };

  return (
    <div className="course-content body-card mt-4">
      <h4 className="mb-3">
        <strong>Course content</strong>
      </h4>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <div>
          {courseContent.sections.length} sections •{" "}
          {courseContent.lecturesCount} lectures • {courseContent.totalTime}{" "}
          total length
        </div>
        <div className="expand" onClick={ExpandAll}>
          <strong>Expand all sections</strong>
        </div>
      </div>
      <myAccordionContext.Provider
        value={{
          expandedList: expandedList,
          toggleExpand: (id) => {
            const newList = [...expandedList];
            for (let i = 0; i < newList.length; i++) {
              if (newList[i].id.toString() === id.toString())
                newList[i].expanded = !newList[i].expanded;
            }
            setExpandedList(newList);
          },
        }}
      >
        {getAccordions(courseContent.sections)}
      </myAccordionContext.Provider>
    </div>
  );
}
