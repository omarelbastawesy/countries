import { Wraper } from "./page.styles";
import Card from "../Card";
import { Link } from "react-router-dom";

const Page = ({ state }) => {
  return (
    <Wraper>
      {state.map((con) => (
        <Link to={con.numericCode}>
          <Card
            key={con.numericCode}
            fullname={con.name}
            img={con.flags.png}
            count={con.population.toLocaleString()}
            region={con.region}
            capital={con.capital}
          />
        </Link>
      ))}
    </Wraper>
  );
};

export default Page;
