import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Projects = lazy(() => import('./pages/Projects/Projects.jsx'));
const AboutMe = lazy(() => import('./pages/AboutMe/AboutMe.jsx'));
const ContactMe = lazy(() => import('./pages/ContactMe/ContactMe.jsx'));
const Footer = lazy(() => import('./components/Footer/Footer.jsx'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactMe />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
