import { useFetch } from "../hooks/fetchFeed";
import Title from "../components/Title";
import HotelsList from "../components/HotelsList";
import Promotions from "../components/Promotions"
import FavoriteDestination from "../components/FavoriteDestinations"

const Ofertas = (() => {
    const  hotels  = useFetch();
    return(
        <>
            <Title txt="Ofertas de último minuto"/> 
            <HotelsList hotels={hotels} />
            <Promotions /> 
            <FavoriteDestination />  
        </>
    )

})

export default Ofertas;
