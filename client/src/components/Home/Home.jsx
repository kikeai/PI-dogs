import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as actions from "../../redux/actions"
import Filters from "../Filters/Filters";
import Cards from "../Cards/Cards";
import { Paginate } from "../Paginate/Paginate";

export default function Home(){

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
        <div className="home">
            <Filters />
            <Cards dogs={dogs}/>
            <Paginate pagina={pagina} setPagina={setPagina} maximo={maximo} />
        </div>
    )
}