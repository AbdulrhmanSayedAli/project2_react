import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../../pages/CoursePage";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import RatingBar from "../../../RatingBar/RatingBar";

const BarItem = (id, rate, percentage) => {
  return (
    <div className="d-flex flex-wrap w-100 align-items-center">
      <Box
        className="ms-4 m-2 box"
        sx={{
          width: "50%",
          color: (theme) => theme.palette.grey,
        }}
      >
        <LinearProgress
          variant="determinate"
          value={percentage}
          color="inherit"
        />
      </Box>
      <div className="d-flex  align-items-center">
        <div className="d-none d-md-block">
          <RatingBar rate={rate} courseId={`${id}-${rate}`} />
        </div>
        <div className="d-block d-md-none">{rate}stars</div>
        <div className="m-2 blue">{percentage}%</div>
      </div>
    </div>
  );
};

export default function StudentFeedback() {
  const course = useContext(SimpleCourseContext);

  return (
    <>
      <h4>
        <strong>Students feedback</strong>
      </h4>

      <div className="d-md-flex text-center align-items-center justify-content-center me-5">
        <div className="mt-3">
          <h5>
            <strong>{course.feedBack.rate}</strong>
          </h5>
          <RatingBar rate={course.feedBack.rate} courseId={course.id} />

          <p>Course Rating</p>
        </div>

        <div className="flex-grow-1 ms-5">
          {BarItem(course.id, 5, course.feedBack["5"])}
          {BarItem(course.id, 4, course.feedBack["4"])}
          {BarItem(course.id, 3, course.feedBack["3"])}
          {BarItem(course.id, 2, course.feedBack["2"])}
          {BarItem(course.id, 1, course.feedBack["1"])}
        </div>
      </div>
    </>
  );
}
