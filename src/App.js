import React, { Suspense, lazy } from 'react';
import CustomsState from './context/customs/customsState';
import Loader from './components/Loader';
const Hugo = lazy(() => import('./components/Hugo'));

function App() {
  return (
    <CustomsState>
      <Suspense fallback={<Loader />}>
        <Hugo />
      </Suspense>
    </CustomsState>
  );
}

export default App;
