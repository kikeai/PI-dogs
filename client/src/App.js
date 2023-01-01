import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from './redux/actions.js'
import LandingPage from './components/LandingPage/LandingPage';
//import Home from './components/Home/Home';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
//import breeds from './data';
import { Paginate } from './components/Paginate/Paginate';


function App() {
  const dispatch = useDispatch()
  const [pagina, setPagina] = useState (1);
  // eslint-disable-next-line no-unused-vars
  const [porPagina, setPorPagina] = useState (8);

  useEffect(() => {
    dispatch(actions.getBreeds());
    dispatch(actions.getTemperaments());
  }, [dispatch]);
  
  const breeds = useSelector((state) => state.myBreeds)
  const maximo = Math.ceil(breeds.length / porPagina);
  let dogs = breeds.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina);

  

  return (
    <div className="App">
      <Route exact path="/" render={() => <LandingPage />} />
      <Route path="/home">
        <NavBar />
      </Route>
      <div className='home'>
        <Route exact path="/home" render={() => <Filters />} />
        <Route exact path="/home" render={() => <Cards dogs={dogs}/>} />
        <Route exact path="/home" render={() => <Paginate pagina={pagina} setPagina={setPagina} maximo={maximo} />} />
      </div>
    </div>
  );
}

export default App;
