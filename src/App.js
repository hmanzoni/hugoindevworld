import React, { Suspense, lazy } from 'react';
import IconsState from './context/icons/iconsState';
import Loader from './components/Loader';
const Hugo = lazy(() => import('./components/Hugo'));

function App() {
  return (
    <IconsState>
      <Suspense fallback={<Loader />}>
        <Hugo />
      </Suspense>
    </IconsState>
  );
}

export default App;
