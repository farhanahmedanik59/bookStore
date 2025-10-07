import React from "react";

const ReadlistBooks = ({ book }) => {
  return (
    <div className="mt-4 border">
      <div className="flex gap-3">
        <img src={book.image} className="h-[200px] w-[200px]" alt="" />
        <div>
          <h1>{book.bookName}</h1>
          <h1>{book.author}</h1>
          <div className="flex gap-2.5">
            <h1>Tag</h1>
            <h1>{book.rating}</h1>
            <h1>{book.totalPages}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadlistBooks;
