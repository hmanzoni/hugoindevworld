import React, { Suspense, lazy } from 'react';
import CustomsState from './context/customs/customsState';
import Loader from './components/ui/Loader';
const Layout = lazy(() => import('./components/Layout'));

function App() {
  return (
    <CustomsState>
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    </CustomsState>
  );
}

export default App;
