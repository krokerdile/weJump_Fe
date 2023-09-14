import { Routes, Route } from "react-router-dom";
import Index from "../components";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
};

export default Router;
