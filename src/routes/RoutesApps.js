import { Routes, Route } from 'react-router-dom';
import Home from '../apps/home/Home';
const RoutesApps = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/psd" element={<h1>psd route</h1>} />
    </Routes>
  );
};

export default RoutesApps;
