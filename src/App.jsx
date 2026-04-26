import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hub from './pages/Hub';
import Archive from './pages/Archive';
import Chronos from './pages/Chronos';
import Alchemy from './pages/Alchemy';
import Valve from './pages/Valve';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hub />} />
          <Route path="arsenal" element={<Archive />} />
          <Route path="alchemy" element={<Alchemy />} />
          <Route path="chronicles" element={<Chronos />} />
          <Route path="valve" element={<Valve />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
