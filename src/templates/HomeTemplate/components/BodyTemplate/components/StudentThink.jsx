import React from "react";
import "./StudentThink.scss";
import ReactFancyBox from "react-fancybox";
import "react-fancybox/lib/fancybox.css";

const StudentThink = () => {
  const images = [
    "/img/nguyendangkhanhvan.jpg",
    "/img/nguyenquocngu.jpg",
    "/img/nguyentanloi.jpg",
    "/img/phamhuyhoang.jpg",
    "/img/phananhngoc.jpg",
    "/img/buivinhkhai.jpg",
  ];

  return (
    <div className="py-10 StudentThink bg-[#F2F3FE]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((image, index) => (
            <div className="imageWrapper" key={index}>
              <div className="bgDark"></div>
              <a
                className="w-5 h-5 btn_search rounded-full border border-white"
                data-fancybox
                href={image}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
              <img
                src={image}
                className="rounded-lg"
                alt={`Student ${index}`}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <button className="px-10 py-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-700 text-white rounded-lg transition-all duration-500 hover:bg-[length:200%_200%] bg-[length:100%_100%]">
            Xem cảm nhận học viên
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentThink;
