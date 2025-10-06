import React, { Suspense, useContext, useEffect, useState } from "react";

import { DataContex } from "../Home/Home";
import Book from "../Book/Book";

const Books = () => {
  const data = useContext(DataContex);
  return (
    <div className="flex justify-center flex-col bg-white">
      <h1 className="text-3xl text-center p-6">Books</h1>
      <div className="grid grid-cols-4 gap-3 justify-center ">
        <Suspense fallback={<h1>loading</h1>}>
          {data.map((singleBook) => (
            <Book singleBook={singleBook} key={singleBook.bookId}></Book>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
