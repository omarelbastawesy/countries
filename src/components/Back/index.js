import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import back_light from "../../images/arrow-left-light.svg";
import back_black from "../../images/arrow-left-black.svg";

import { Wraper, Btn, Content, Image } from "./Back.styles";

const Back = () => {
  const [back, setBack] = useState(back_black);

  const history = useNavigate();

  setTimeout(() => {
    let theme = document.getElementById("theme");
    theme.onclick = () => {
      if (theme.dataset.theme === "black") {
        setBack(back_light);
      } else if (theme.dataset.theme === "light") {
        setBack(back_black);
      }
    };
  }, 0);

  const handleBack = () => {
    // Go back in the history
    history(-1);
  };

  return (
    <Wraper>
      <Content>
        <Btn onClick={handleBack}>
          <Image>
            <img src={back} alt="back" />
          </Image>
          Back
        </Btn>
      </Content>
    </Wraper>
  );
};

export default Back;
