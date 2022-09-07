import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";
import PreviewCourse from "./PreviewCourse";
import TvIcon from "@mui/icons-material/Tv";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { NavBarVisibilityContext } from "../../../App";
import ArticleIcon from "@mui/icons-material/Article";

const includesItem = (icon, text) => {
  return (
    <div
      className="includes-item"
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default function SideCourseCard(props) {
  const course = useContext(SimpleCourseContext);
  const navVisibility = useContext(NavBarVisibilityContext);
  return (
    <div
      className={
        navVisibility.isVisible
          ? "side d-none d-lg-block"
          : "side side-sticky d-none d-lg-block"
      }
    >
      {navVisibility.isVisible ? <PreviewCourse /> : <span></span>}
      <h3 className="mt-2">
        <strong>{course.newPrice}$</strong>
      </h3>
      <button className="add-to-cart">Add to cart</button>
      <button className="buy-now">Buy now</button>
      <p>30-Day Money-Back Guarantee</p>
      <h4>
        <strong>This course includes:</strong>
      </h4>
      {includesItem(
        <TvIcon />,
        `${course.courseIncludes.hours} hours on-demand video`
      )}
      {course.courseIncludes.downloadableResources === 0 ? (
        <></>
      ) : (
        includesItem(
          <SystemUpdateAltIcon />,
          `${
            course.courseIncludes.downloadableResources
          } downloadable resource${
            course.courseIncludes.downloadableResources === 1 ? "" : "s"
          }`
        )
      )}{" "}
      {course.courseIncludes.articles === 0 ? (
        <></>
      ) : (
        includesItem(
          <ArticleIcon />,
          `${course.courseIncludes.articles} article${
            course.courseIncludes.articles === 1 ? "" : "s"
          }`
        )
      )}
      {course.courseIncludes.lifetimeAccess ? (
        includesItem(<AllInclusiveIcon />, "Full lifetime access")
      ) : (
        <></>
      )}
      {course.courseIncludes.mobileAccess ? (
        includesItem(<MobileFriendlyIcon />, "Access on mobile and TV")
      ) : (
        <></>
      )}
      {course.courseIncludes.certificate ? (
        includesItem(<EmojiEventsIcon />, "Certificate of completion")
      ) : (
        <></>
      )}
      <div className="under-includes">
        <div>
          <strong>Share</strong>
        </div>
        <div>
          <strong>Gift this course</strong>
        </div>
        <div>
          <strong>Apply coupon</strong>
        </div>
      </div>
      <div className="divider"></div>
      <h4>
        <strong>Training 5 or more people?</strong>
      </h4>
      <p>
        Get your team access to 17,000+ top Udemy courses anytime, anywhere.
      </p>
      <button className="try-udemy mb-3">Try udemy Business</button>
    </div>
  );
}
