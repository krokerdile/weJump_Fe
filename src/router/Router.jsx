import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Layout from "../pages/Layout";
import Courses from "../pages/Courses";
import Clubs from "../pages/clubs/Clubs";
import Event from "../pages/Event";
import Account from "../pages/Account";
import ClubDetail from "../pages/clubs/ClubDetail";
import CoursePage from "../pages/CoursePage";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/weJump_Fe/" element={<Index />} />
        <Route path="/weJump_Fe/Courses" element={<Courses />} />
        <Route path="/weJump_Fe/Clubs" element={<Clubs />} />
        <Route path="/weJump_Fe/Clubs/:clubId" element={<ClubDetail />} />
        <Route path="/weJump_Fe/Event" element={<Event />} />
        <Route path="/weJump_Fe/Account" element={<Account />} />
        <Route path="/weJump_Fe/Courses/:courseID" element={<CoursePage />} />
      </Route>
    </Routes>
  );
};

export default Router;
