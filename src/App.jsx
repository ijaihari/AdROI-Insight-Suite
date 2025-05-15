import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Console from './components/Console';
import Home from './components/Home';
import ScrollToTop from "./components/ScrollToTop";
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';

function App() {
  return (
    <div className=''>
      <Header />

      <main>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/console" element={<Console />} >
            <Route path='filtered/:id' element={<Console />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
