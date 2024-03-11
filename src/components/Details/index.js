import React from "react";
import { Wraper, Content, Image, Info } from "./details.styles";

const Details = ({
  flag,
  CounteryName,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  border,
}) => {
  const lang =
    languages.length > 1
      ? languages.map((item) => `${item.name}, `)
      : languages.map((item) => item.name);

  const currency =
    currencies.length > 1
      ? currencies.map((item) => `${item.name}, `)
      : currencies.map((item) => item.name);

  const borders = border ? (
    border.map((item, index) => (
      <span key={index} className="bord">
        {item}
      </span>
    ))
  ) : (
    <span className="bord">No Borders</span>
  );

  return (
    <Wraper>
      <Content>
        <Image>
          <img alt="countery" src={flag} />
        </Image>
        <Info>
          <h2>{CounteryName}</h2>
          <div className="info">
            <div className="main_info">
              <p>
                Native Name: <span>{nativeName}</span>
              </p>
              <p>
                Population: <span>{population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                Sub Region: <span>{subRegion}</span>
              </p>
              <p>
                Capital: <span>{capital}</span>
              </p>
            </div>
            <div className="sub_info">
              <p>
                Top Level Domain: <span>{topLevelDomain}</span>
              </p>
              <p>
                Currencies: <span>{currency}</span>
              </p>
              <p>
                Languages: <span>{lang}</span>
              </p>
            </div>
          </div>
          <div className="border">
            <p>
              Border Countries: <span className="borders">{borders}</span>
            </p>
          </div>
        </Info>
      </Content>
    </Wraper>
  );
};

export default Details;
