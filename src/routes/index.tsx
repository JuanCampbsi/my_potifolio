import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import Main from "../pages/Main";
import Works from "../pages/Works";

const RoutesApplication = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesApplication;
