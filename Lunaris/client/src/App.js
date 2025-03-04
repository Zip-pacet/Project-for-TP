import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/ui/header/Header";
import Homepage from "./components/pages/homepage/Homepage";
import Footer from "./components/ui/footer/Footer";
import Services from "./components/pages/services/Services";
import Portfolio from "./components/pages/portfolio/Portfolio";
import About from "./components/pages/about/About";
import Communication from "./components/pages/communication/Communication";
import Events from "./components/pages/events/Events";
import CorpPage from "./components/pages/services/subServices/CorpPage";
import Marketplace from "./components/pages/services/subServices/Marketplace";
import Landing from "./components/pages/services/subServices/Landing";
import OurWorks from "./components/pages/portfolio/portfolioPages/OurWorks";
import OurAwards from "./components/pages/portfolio/portfolioPages/OurAwards";
import Staff from "./components/pages/about/aboutPages/Staff";
import Company from "./components/pages/about/aboutPages/Company";
import PostPage from "./components/pages/postPage/PostPage";
import { AuthContext } from "./context";
import "./styles/common.css";

import YandexMetrica from "./utils/YandexMetrica";
window.SERVER_IP = "http://89.111.169.222:3001";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className='App'>
      <YandexMetrica id={97091665} />

      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/marketplace' element={<Marketplace />} />
          <Route path='/services/landing' element={<Landing />} />
          <Route path='/services/corp_site' element={<CorpPage />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/works' element={<OurWorks />} />
          <Route path='/portfolio/awards' element={<OurAwards />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/company' element={<Company />} />
          <Route path='/about/staff' element={<Staff />} />
          <Route path='/communication' element={<Communication />} />
          <Route exact path='/events' element={<Events />} />
          <Route exact path='/events/:id' element={<PostPage />} />
        </Routes>
        <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
