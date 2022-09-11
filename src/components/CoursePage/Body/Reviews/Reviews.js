import React, { useContext, useState } from "react";
import { SimpleCourseContext } from "../../../../pages/CoursePage";
import Comment from "./Comment";
import Dropdown from "react-bootstrap/Dropdown";
import StudentFeedback from "./StudentFeedback";
import SearchIcon from "@mui/icons-material/Search";

const dropDownItems = ["All ratings", "5", "4", "3", "2", "1"];

export default function Reviews() {
  const course = useContext(SimpleCourseContext);
  const [selectedDropDown, setSelectedDropDown] = useState("All ratings");
  const [searchQuery, setSearchQuery] = useState("");

  const handleDropDownChange = (chosen) => {
    setSelectedDropDown(chosen);
  };

  return (
    <section className="body-card reviews mt-4">
      <StudentFeedback />

      <div className="comments">
        <h4>
          <strong>Reviews</strong>
        </h4>

        <div className="d-flex align-items-center">
          <form
            className="flex-grow-1 d-flex align-items-center search-rating mx-3"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <input
              className="flex-grow-1"
              placeholder="Search Reviews"
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value.replaceAll(" ", ""))
              }
            ></input>
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
          <Dropdown>
            <Dropdown.Toggle className="drop-down">
              {selectedDropDown}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {dropDownItems.map((el, index) => {
                return (
                  <Dropdown.Item
                    onClick={() => {
                      handleDropDownChange(el);
                    }}
                  >
                    {el}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {course.feedBack.reveiews.map((el, index) => {
          if (
            el.rate.toString() === selectedDropDown ||
            selectedDropDown === "All ratings"
          ) {
            if (
              el.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
              searchQuery === ""
            )
              return <Comment comment={el} />;
          }

          return <></>;
        })}
      </div>
    </section>
  );
}
