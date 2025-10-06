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
  return (
    <div>
      <Tabs className="min-h-[80vh]">
        <TabList>
          <Tab>Read Books List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          {read.map((book) => (
            <ReadlistBooks book={book}></ReadlistBooks>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Readlist;
