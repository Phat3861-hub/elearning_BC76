import React from "react";
import { Carousel } from "antd";
import "./HomeBanner.scss";

const HomeBanner = () => {
  const videoUrl = "/video/videobanner.mp4";
  const bannerImg = "/img/banner.jpg";
  const slides = [
    {
      title: "KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN",
      subtitle: "Trở thành lập trình chuyên nghiệp tại CyberSoft",
      button1: "Xem khóa học",
      button2: "Tư vấn học",
    },
    {
      title: "NÂNG CAO KỸ NĂNG",
      subtitle: "Thành thạo lập trình với lộ trình chi tiết",
      button1: "Xem khóa học",
      button2: "Tư vấn học",
    },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Carousel autoplay arrows infinite={false}>
      {slides.map((slide, index) => (
        <div key={index} className="bgContainer">
          <div className="overlay"></div>
          <video src={videoUrl} autoPlay loop muted></video>
          <div className="content-container">
            <div className="banner-img">
              <img src={bannerImg} alt="Banner" className="opacity-85" />
            </div>
            <div className="content space-y-1  md:space-y-10">
              <h1 className="text-2xl sm:text-3xl md:text-5xl   font-bold">
                {slide.title}
              </h1>
              <p className="text-2xl sm:text-4xl md:text-5xl   font-bold uppercase">
                {slide.subtitle}
              </p>
              <div className="flex items-center">
                <button
                  className="px-4 py-2 border border-white text-sm sm:text-xl hover:bg-white hover:text-black duration-500 mx-3 rounded-lg"
                  onClick={() => scrollToSection("course-popular")}
                >
                  {slide.button1}
                </button>
                <button
                  className="px-4 py-2 border border-white text-sm sm:text-xl mx-3 rounded-lg bg-white text-black"
                  onClick={() => scrollToSection("footer")}
                >
                  {slide.button2}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HomeBanner;
