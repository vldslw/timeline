import "./index.scss";
import { Heading } from "../../components/Heading/Heading";
import { Periods } from "../../components/Periods/Periods";

export const Home = () => {
  return (
    <div className="home">
      <Heading />
      <Periods />
    </div>
  );
};
