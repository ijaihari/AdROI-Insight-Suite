import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Console from './components/Console';
import Home from './components/Home';
import Document from './components/Document';




function App() {
  return (
    <div className=''>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/console" element={<Console />} >
            <Route path='filtered/:id' />
          </Route>
          <Route path='/doc' element={<Document />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
