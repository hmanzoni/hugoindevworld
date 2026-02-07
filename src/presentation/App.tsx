import React, { Suspense, lazy } from 'react';
import AppProvider from '@presentation/context/AppProvider';
import Loader from '@presentation/components/Loader';
import Layout from '@presentation/components/Layout';
import Home from '@presentation/sections/Home';
import About from '@presentation/sections/About';
import { AppDependencies } from './compositionRoot';

const Skills = lazy(() => import('@presentation/sections/Skills'));
const Services = lazy(() => import('@presentation/sections/Services'));
const Qualification = lazy(() => import('@presentation/sections/Qualification'));

function App({ contentRepo, iconProvider, storageProvider, browserProvider }: AppDependencies) {
  return (
    <AppProvider
      contentRepo={contentRepo}
      iconProvider={iconProvider}
      storageProvider={storageProvider}
      browserProvider={browserProvider}
    >
      <Layout>
        <Home />
        <About />
        <Suspense fallback={<Loader />}>
          <Skills />
          <Qualification />
          <Services />
        </Suspense>
      </Layout>
    </AppProvider>
  );
}

export default App;
