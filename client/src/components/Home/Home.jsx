import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as actions from "../../redux/actions"
import Filters from "../Filters/Filters";
import Cards from "../Cards/Cards";
import { Paginate } from "../Paginate/Paginate";
import Loading from "../Loading/Loading";

export default function Home(){

    const dispatch = useDispatch()
    const [pagina, setPagina] = useState (1);
    // eslint-disable-next-line no-unused-vars
    const [porPagina, setPorPagina] = useState (8);
    
    const req = useSelector((state) => state.request);
    const breeds = useSelector((state) => state.myBreeds);
    const allBreeds = useSelector((state) => state.allBreeds);
    const maximo = Math.ceil(breeds.length / porPagina);
    let dogs = breeds.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina);

    useEffect(() => {
        if(req){
            dispatch(actions.getBreeds());
            dispatch(actions.getTemperaments());
            dispatch(actions.requestYoN(false));
        }
    }, [dispatch, req]);
    
    return allBreeds.length?(
        <div className="home">
            <Filters />
            <Cards dogs={dogs}/>
            <Paginate pagina={pagina} setPagina={setPagina} maximo={maximo} />
        </div>
    ):
    <Loading />
}