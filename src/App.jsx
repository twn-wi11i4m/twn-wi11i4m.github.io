import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components for the personal page
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import ScrollToTop from "./components/ScrollToTop";

// Import components for the social card
import SocialCard from "./components/SocialCard";

const AppPersonalPage = () => {
  return (
    <div id="page-top">
      <Navbar />
      <Masthead />
      <Portfolio />
      <About />
      <ContactMe />
      <Footer />
      <Copyright />
      <ScrollToTop />
    </div>
  );
};

const AppSocialCard = () => {
  return (
    <div id="page-top">
      <SocialCard />
      <Copyright />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index exact element={<AppPersonalPage />} />
        <Route
          path={process.env.REACT_APP_SOCIAL_CARD_PATH}
          element={<AppSocialCard />}
        />
      </Routes>
    </Router>
  );
};

export default App;
