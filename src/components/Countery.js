import Back from "./Back";
import { useParams } from "react-router";
import dataFull from "../data.json";
import Details from "./Details";
import NotFound from "./NotFound";

const Countery = () => {
  const { countery } = useParams();

  const filteredData = dataFull.filter((item) => item.numericCode === countery);

  console.log(filteredData);

  return (
    <>
      <Back />
      {filteredData.length > 0 ? (
        <Details
          flag={filteredData[0].flag}
          CounteryName={filteredData[0].name}
          nativeName={filteredData[0].nativeName}
          population={filteredData[0].population}
          region={filteredData[0].region}
          subRegion={filteredData[0].subregion}
          capital={filteredData[0].capital}
          topLevelDomain={filteredData[0].topLevelDomain}
          currencies={filteredData[0].currencies}
          languages={filteredData[0].languages}
          border={filteredData[0].borders}
        />
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Countery;
