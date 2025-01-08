import React from "react";

const TreeStep = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="lg:grid grid-cols-2 items-center lg:space-y-0 space-y-5">
          <div className="space-y-5">
            <p className="text-3xl">
              3 bước giúp <br />{" "}
              <span className="font-semibold"> bạn chuyển nghề</span>
            </p>
            <img src="/img/abc-1.png" alt="" />
            <div className="text-center ">
              <button className="px-10 py-3 border rounded-lg bg-gradient-to-r from-[#227df9] via-[#7462f9] to-[#df3ef8] text-white font-semibold">
                Tư vấn định hướng
              </button>
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex items-center space-x-5">
              <div className="w-24 h-24 rounded-full border-4 border-transparent bg-gradient-to-r from-[#227df9] via-[#7462f9] to-[#df3ef8] p-[2px] flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#227df9] via-[#7462f9] to-[#df3ef8] text-2xl font-bold">
                    1
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-xl shadow-lg w-4/5">
                <p className="font-semibold">
                  Sắp xếp dành thời gian 3h mỗi ngày- tận dụng thời gian rảnh
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="w-24 h-24 rounded-full border-4 border-transparent bg-gradient-to-r from-[#227df9] via-[#7462f9] to-[#df3ef8] p-[2px] flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#227df9] via-[#7462f9] to-[#df3ef8] text-2xl font-bold">
                    2
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-xl shadow-lg w-4/5">
                <p className="font-semibold ">Chọn một lộ trình để đi</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="w-24 h-24 rounded-full border-4 border-transparent bg-gradient-to-r from-[#227df9] via-[#7462f9] to-[#df3ef8] p-[2px] flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#227df9] via-[#7462f9] to-[#df3ef8] text-2xl font-bold">
                    3
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-xl shadow-lg w-4/5">
                <p className="font-semibold ">
                  Thực hành trên dự án, đủ skill, kết nối doanh nghiệp sau khóa
                  học để nhận việc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeStep;
