import { useEffect, useState } from "react";
  const BASE_URL = "https://frontend-facade.pricetravelinternal.com/HotelListFacade?culture=es-mx&pageSize=18&organizationId=1&propertyId=1&getFilters=true&placeId=53862&checkIn=2022-06-01&checkOut=2022-06-06&currentPage=1&page=1&site=https://www.pricetravel.com.mx&countryCode=MX&format=false&cache=false&placeName=Canc%C3%BAn,%20Quintana%20Roo,%20M%C3%A9xico&pax=/2/n";


export const useFetch = () => {
  const [ hotels , setHotels ] = useState([]);

  useEffect(() => {
    const fetchCard = async () => {
      const response = await fetch(BASE_URL);   
      const data = await response.json();
      setHotels(data.hotels);

    };
    fetchCard();
  }, []);
  return hotels;
}; 
