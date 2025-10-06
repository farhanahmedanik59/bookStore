import React from "react";
import books from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="flex bg-gray-100 justify-around p-6 ">
      <div className="flex flex-col justify-center ">
        <h1 className="text-[56px] font-bold">
          Books to freshen up <br />
          your bookshelf
        </h1>
        <button className="btn w-[200px]">View The List</button>
      </div>
      <div>
        <img src={books} className="rounded-md" alt="" />
      </div>
    </div>
  );
};

export default Banner;
