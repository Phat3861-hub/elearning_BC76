import React from "react";
import NewPostCarousel from "../../../../pages/ListCourseByCategory/components/NewPostCarousel";
import CategoryCompany from "../../../../pages/ListCourseByCategory/components/CategoryCompany";
import CoursePopular from "./components/CoursePopular";
import HomeBanner from "./components/HomeBanner";

const BodyTemplate = () => {
  return (
    <>
      <HomeBanner />
      <CategoryCompany />
      <CoursePopular />
      <NewPostCarousel />
    </>
  );
};

export default BodyTemplate;
