import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToLocalDb } from "../../Utility/AddLocalStorage";

const BookDetails = () => {
  const handleRead = (id) => {
    addToLocalDb(id);
  };
  const { id } = useParams();
  const bookId = parseInt(id);
  const allData = useLoaderData();
  const matchData = allData.find((book) => book.bookId === bookId);
  return (
    <div>
      <div className="flex justify-center">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={matchData.image} className="h-[400px] w-full" alt={matchData.bookName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {matchData.bookName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{matchData.review}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rating: {matchData.rating}</div>
              <div className="badge badge-outline">{matchData.category}</div>
            </div>
            <div className="flex justify-between">
              <button className="btn bg-green-300" onClick={() => handleRead(id)}>
                Mark as Read
              </button>
              <button className="btn bg-blue-300">Add To WishList</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
