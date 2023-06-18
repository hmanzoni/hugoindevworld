import React, { Suspense, lazy } from 'react';
import CustomsState from './context/customs/customsState';
import Loader from './components/ui/Loader';
import Layout from './components/Layout';

const About = lazy(() => import('./components/sections/About'));
const Home = lazy(() => import('./components/sections/Home'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Services = lazy(() => import('./components/sections/Services'));
const Qualification = lazy(() => import('./components/sections/Qualification'));

function App() {
  return (
    <CustomsState>
        <Layout>
          <Suspense fallback={<Loader />}>
              <Home />
              <About />
              <Skills />
              <Qualification />
              <Services />
          </Suspense>
        </Layout>
    </CustomsState>
  );
}

export default App;
