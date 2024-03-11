import React, { useState } from "react";

import { Wraper, Content, Head, Mode } from "./header.styles";

import sun from "../../images/sun-regular.svg";
import moon from "../../images/moon-solid.svg";

const Header = () => {
  const [mode, setMode] = useState("Dark Mode");
  const [imode, setImode] = useState(moon);

  let root = document.querySelector("html");

  const theme = (e) => {
    root.setAttribute("data-theme", "black");
    if (e.target.dataset.theme === "black") {
      document.documentElement.style.setProperty(
        "--dark-mode-background",
        "hsl(0, 0%, 98%)"
      );
      document.documentElement.style.setProperty(
        "--dark-mode-elements",
        "hsl(0, 0%, 100%)"
      );
      document.documentElement.style.setProperty(
        "--dark-mode-text",
        "hsl(0, 0%, 0%)"
      );
      document.documentElement.style.setProperty(
        "--dark-mode-input",
        "hsl(0, 0%, 52%)"
      );
      e.target.dataset.theme = "light";
      root.setAttribute("data-theme", "light");

      setMode("Light Mode");
      setImode(sun);
    } else {
      document.documentElement.style.setProperty(
        "--dark-mode-background",
        "hsl(207, 26%, 17%)"
      );
      document.documentElement.style.setProperty(
        "--dark-mode-elements",
        "hsl(209, 23%, 22%)"
      );
      document.documentElement.style.setProperty(
        "--dark-mode-text",
        "hsl(0, 0%, 100%)"
      );
      document.documentElement.style.setProperty(
        "--dark-mode-input",
        "hsl(0, 0%, 90%)"
      );
      e.target.dataset.theme = "black";
      root.setAttribute("data-theme", "black");

      setMode("Dark Mode");
      setImode(moon);
    }
  };

  return (
    <Wraper>
      <Content>
        <Head>
          <h2>Where in the world?</h2>
        </Head>
        <Mode id="theme" data-theme="black" onClick={theme}>
          <div>
            <img src={imode} alt="mode_icon" />
          </div>
          {mode}
        </Mode>
      </Content>
    </Wraper>
  );
};

export default Header;
