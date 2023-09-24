import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Work } from './pages/Work';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { Blog2 } from './pages/Blog2';
import { Blog1 } from './pages/Blog1';
import './index.scss'

// const BASE_URL = `http://localhost:4173/stronk.me/`

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blog1" element={<Blog1 />} />
          <Route path="/blog/blog2" element={<Blog2 />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

