import React, { useState, useEffect } from "react";
import Page from "./Page";
import Bar from "./Bar";
import data from "../data.json";
import { GlobalStyle } from "../GlobalStyles";

function Home() {
  const [state, setState] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [regionItem, setRegionItem] = useState("");

  useEffect(() => {
    if (searchItem === "" || regionItem === "") {
      setState(data);
    }
    if (searchItem !== "" || regionItem === "") {
      let val = data.filter((item) =>
        item.name.toLowerCase().includes(searchItem.toLowerCase())
      );
      setState(val);
    }
    if (searchItem === "" || regionItem !== "") {
      let val = data.filter((item) =>
        item.region.toLowerCase().includes(regionItem.toLowerCase())
      );
      setState(val);
    }
    if (searchItem !== "" || regionItem !== "") {
      let val = data.filter(
        (item) =>
          item.region.toLowerCase().includes(regionItem.toLowerCase()) &&
          item.name.toLowerCase().includes(searchItem.toLowerCase())
      );
      setState(val);
    }
  }, [searchItem, regionItem]);

  return (
    <>
      <div className="App">
        <Bar setSearchItem={setSearchItem} setRegionItem={setRegionItem} />
        <Page state={state} />
      </div>
      <GlobalStyle />
    </>
  );
}
export default Home;
