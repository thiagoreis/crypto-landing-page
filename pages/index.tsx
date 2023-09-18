import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [state, setState] = useState([]);

  const getData = () => {
    setState([]);
  };
  return (
    <>
      <button role="main" name="get" onClick={getData}></button>
    </>
  );
};

export default Home;
