import React from "react";
import books from "../../assets/books.jpg";
import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
gsap.registerPlugin(SplitText);
const Banner = () => {
  useGSAP(() => {
    const split = SplitText.create("#text", {
      type: "words",
    });
    gsap.from(split.words, {
      autoAlpha: 0,
      stagger: 0.05,
      duration: 1,
      delay: 0.05,
    });
    gsap.from("#image", {
      y: 40,
      opacity: 1,
      duration: 1,
      delay: 0.05,
    });
  }, []);
  return (
    <div className="flex bg-gray-100 justify-around p-6 ">
      <div className="flex flex-col justify-center ">
        <h1 className="text-[56px] font-bold " id="text">
          Books to freshen up <br />
          your bookshelf
        </h1>
        <button className="btn w-[200px]">View The List</button>
      </div>
      <div>
        <img src={books} className="rounded-md " alt="" id="image" />
      </div>
    </div>
  );
};

export default Banner;
