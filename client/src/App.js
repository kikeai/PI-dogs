import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Detail from './components/Detail/Detail';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';


function App() {
  const location = useLocation()
  return (
    <div className="App">
      { location.pathname !== "/" && location.pathname !== "/about" && location.pathname !== "/create" && <NavBar /> }
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Form />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      { location.pathname !== "/" && location.pathname !== "/about" && <Footer /> }
    </div>
  );
}

export default App;
