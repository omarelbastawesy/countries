import React, { useEffect, useState } from "react";
import { Wraper, Search, Filter } from "./bar.styles";
import image_black from "../../images/magnifying-glass-black.svg";
import image_light from "../../images/magnifying-glass-light.svg";

const Bar = ({ setSearchItem, setRegionItem }) => {
  const [state, setState] = useState(image_black);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelect = (event) => {
    setRegion(event.target.value);
  };

  useEffect(() => {
    setSearchItem(search);
    setRegionItem(region);
  }, [search, region, setSearchItem, setRegionItem]);

  setTimeout(() => {
    let theme = document.getElementById("theme");
    theme.onclick = () => {
      if (theme.dataset.theme === "black") {
        document.querySelector(".image img").src = setState(image_light);
      } else {
        document.querySelector(".image img").src = setState(image_black);
      }
    };
  }, 0);

  return (
    <Wraper>
      <Search>
        <div className="image">
          <img src={state} id="search_icon" alt="search_icon" />
        </div>
        <input
          value={search}
          placeholder="Search for a country..."
          type="text"
          onChange={handleChange}
        ></input>
      </Search>
      <Filter>
        <select value={region} onChange={handleSelect}>
          <option hidden defaultValue>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </Filter>
    </Wraper>
  );
};

export default Bar;
