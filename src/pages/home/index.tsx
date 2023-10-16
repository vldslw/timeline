import "./index.scss";
import { Heading } from "../../components/Heading/Heading";
// import { Periods } from "../../components/Periods/Periods";
import { Carousel } from "../../components/Carousel/Carousel";

export const Home = () => {
  return (
    <div className="home">
      <Heading />
      {/* <Periods /> */}
      <Carousel />
    </div>
  );
};
