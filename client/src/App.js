import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <Route exact path="/" render={() => <LandingPage />} />
      <Route exact path="/home" render={() => <Home />} />
    </div>
  );
}

export default App;
