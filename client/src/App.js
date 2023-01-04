import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Detail from './components/Detail/Detail';
import Home from './components/Home/Home';
import Form from './components/Form/Form';


function App() {

  return (
    <div className="App">
      <Route exact path="/" render={() => <LandingPage />} />
      <Route path="/home" render={() => <NavBar />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/create" render={() => <Form />} />
      <Route exact path="/detail/:id" render={() => <Detail />} />
    </div>
  );
}

export default App;
