import React, { useContext } from "react";
import { DataContex } from "../Home/Home";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  return (
    <Link to={`/bookDetails/${singleBook.bookId}`}>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={singleBook.image} className="h-[400px] w-full" alt={singleBook.bookName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {singleBook.bookName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{singleBook.review}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rating: {singleBook.rating}</div>
              <div className="badge badge-outline">{singleBook.category}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
