import React from "react";
import NewPostCarousel from "../../../../pages/ListCourseByCategory/components/NewPostCarousel";
import CategoryCompany from "../../../../pages/ListCourseByCategory/components/CategoryCompany";
import CoursePopular from "./components/CoursePopular";
import HomeBanner from "./components/HomeBanner";
import CountUp from "./components/CountUp";
import StudentThink from "./components/StudentThink";
import TreeStep from "./components/TreeStep";

const BodyTemplate = () => {
  return (
    <>
      <HomeBanner />
      <CategoryCompany />
      <CoursePopular />
      <TreeStep />
      <CountUp />
      <StudentThink />
      <NewPostCarousel />
    </>
  );
};

export default BodyTemplate;
