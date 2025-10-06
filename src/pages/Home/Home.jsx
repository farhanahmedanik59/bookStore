import React, { createContext } from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

export const DataContex = createContext("");
const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <DataContex.Provider value={data}>
        <Books></Books>
      </DataContex.Provider>
    </div>
  );
};

export default Home;
