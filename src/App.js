import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Container from './components/Container/Container.jsx';
import { Suspense } from 'react';
import { Loader } from './components/Loader/Loader.jsx';
// import { Outlet } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Projects = lazy(() => import('./pages/Projects/Projects.jsx'));
const AboutMe = lazy(() => import('./pages/AboutMe/AboutMe.jsx'));
const ContactMe = lazy(() => import('./pages/ContactMe/ContactMe.jsx'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'));
// const Footer = lazy(() => import('./components/Footer/Footer.jsx'));

export const App = () => {
  return (
    <>
      <Layout />
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} exact />

            <Route path="about" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<ContactMe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <Footer /> */}
        </Suspense>
      </Container>
    </>
  );
};

export default App;
