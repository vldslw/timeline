import { Route, Routes } from "react-router-dom";
import { Home } from "./home/index";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
