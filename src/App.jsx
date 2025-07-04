import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sogra from './Sogra';
import Namorada from './Namorada';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sogra" element={<Sogra />} />
        <Route path="/namorada" element={<Namorada />} />
      </Routes>
    </BrowserRouter>
  );
}