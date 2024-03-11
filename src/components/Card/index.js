import React from "react";
import { Wraper, Flag, Info, Name, Details } from "./card.styles";

const Card = ({ img, fullname, count, region, capital }) => {
  return (
    <Wraper>
      <Flag>
        <img src={img} alt={fullname} />
      </Flag>
      <Info>
        <Name>{fullname}</Name>
        <Details>
          <p>
            Population: <span>{count}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </Details>
      </Info>
    </Wraper>
  );
};

export default Card;
