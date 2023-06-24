import React, { Suspense, lazy } from 'react';
import CustomsState from './context/customs/customsState';
import Loader from './components/ui/Loader';
import Layout from './components/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';

const Skills = lazy(() => import('./components/sections/Skills'));
const Services = lazy(() => import('./components/sections/Services'));
const Qualification = lazy(() => import('./components/sections/Qualification'));

function App() {
  return (
    <CustomsState>
        <Layout>
          <Home />
          <About />
          <Suspense fallback={<Loader />}>
              <Skills />
              <Qualification />
              <Services />
          </Suspense>
        </Layout>
    </CustomsState>
  );
}

export default App;
