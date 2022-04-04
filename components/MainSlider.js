import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="Slider h-full w-[90%] bg-opacity-50">
      <div className="h-full w-full">
        <Slider {...settings}>
          <Link href="/proPrinter">
            <a className="Slider1 h-full flex justify-center items-end">
              <img
                src="/Pro95.png"
                className="object-contain max-h-[90%] 3xl:scale-[80%]"
              />
            </a>
          </Link>
          <Link href="/proS">
            <a className="Slider1 h-full flex justify-center items-end">
              <img
                src="/ProS.png"
                className="object-contain max-h-[90%] 3xl:scale-[80%] self-end"
              />
            </a>
          </Link>
          <Link href="/proWash">
            <a className="Slider2 !flex justify-self-center self-end">
              <img
                src="/ProWash.png"
                className="object-contain max-h-[450px] 3xl:scale-[80%]"
              />
            </a>
          </Link>
          <Link href="/proCure">
            <a className="Slider2 !flex justify-self-center self-end">
              <img
                src="/ProCure.png"
                className="object-contain max-h-[450px] 3xl:scale-[75%]"
              />
            </a>
          </Link>
          <Link href="/proCure2">
            <a className="Slider2 !flex justify-self-center self-end">
              <img
                src="/ProCure2.png"
                className="object-contain max-h-[450px] 3xl:scale-[80%] self-end"
              />
            </a>
          </Link>
        </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
