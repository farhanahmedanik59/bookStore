import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { GetBookList } from "../../Utility/AddLocalStorage";
import ReadlistBooks from "../ReadlisBooks/ReadlistBooks";

const Readlist = () => {
  const [read, setRead] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    const stored = GetBookList();
    const converted = stored.map((id) => parseInt(id));
    const myReadlist = data.filter((book) => converted.includes(book.bookId));
    setRead(myReadlist);
  }, []);
  const [sort, setSort] = useState([]);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sorted = [...read].sort((a, b) => a.totalPages - b.totalPages);
      setRead(sorted);
    } else {
      setSort(type);
      const sorted = [...read].sort((a, b) => a.rating - b.rating);
      setRead(sorted);
    }
  };
  return (
    <div className="text-center ">
      <details className="dropdown">
        <summary className="btn m-1">Sort :{sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("rating")}>Rating</a>
          </li>
        </ul>
      </details>
      <Tabs className="min-h-[80vh] mt-3">
        <TabList>
          <Tab>Read Books List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          {read.map((book) => (
            <ReadlistBooks book={book}></ReadlistBooks>
          ))}
        </TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Readlist;
