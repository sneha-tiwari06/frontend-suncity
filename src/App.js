import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './widgets/sidebar';
import HomeBanner from './pages/home-banner';
import AddHomeBanner from './pages/add-home-banner';
import AboutUs from './pages/about-us';
import AddAboutUs from './pages/add-about-us';
import HomeAbout from './pages/home-about-us';
import AddHomeAboutUs from './pages/add-home-about';
import AddSpotlight from './pages/add-spotlight';
import Spotlight from './pages/spotlight';
import Alumini from './pages/alumini';
import AddAlumini from './pages/add-alumini';
import AddAcademicSpectrum from './pages/add-academic-spectrum';
import BeingUnique from './pages/being-unique';
import DirectorsMsg from './pages/directors-msg';
import OurFaculty from './pages/our-faculty';
import Awards from './pages/awardsndhonours';
import LearningStage from './pages/learning-stage';

function App() {
  return (

    <Router>
      <div className='row w-100'>
        <div className='col-md-2 Sidebar'>
          <Sidebar />
        </div>
        <div className='col-md-10 content'>
          <Routes>
          <Route path="/home-banner" element={<HomeBanner />} />
          <Route path="/add-home-banner" element={<AddHomeBanner />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/add-about-us" element={<AddAboutUs />} />
          <Route path="/home-about-us" element={<HomeAbout />} />
          <Route path="/add-home-about" element={<AddHomeAboutUs />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/add-spotlight" element={<AddSpotlight />} />
          <Route path="/alumni" element={<Alumini />} />
          <Route path="/add-alumni" element={<AddAlumini />} />
          <Route path="/add-academic-spectrum" element={<AddAcademicSpectrum />} />
          <Route path="/being-unique" element={<BeingUnique />} />
          <Route path="/director-msg" element={<DirectorsMsg />} />
          <Route path="/faculty" element={<OurFaculty />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/learning-stage" element={<LearningStage />} />

          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
