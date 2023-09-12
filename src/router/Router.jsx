import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Layout from "../pages/Layout";
import Courses from "../pages/Courses";
import Clubs from "../pages/Clubs";
import Event from "../pages/Event";
import Account from "../pages/Account";

const Router = () => {
  return (
    <Routes element={<Layout />}>
      <Route path="/weJump_Fe/" element={<Index />} />
      <Route path="/weJump_Fe/Courses" element={<Courses />} />
      <Route path="/weJump_Fe/Clubs" element={<Clubs />} />
      <Route path="/weJump_Fe/Event" element={<Event />} />
      <Route path="/weJump_Fe/Account" element={<Account />} />
    </Routes>
  );
};

export default Router;
