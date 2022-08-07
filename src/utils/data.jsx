import {FaHotel, FaTicketAlt, FaBusAlt ,FaFireAlt } from "react-icons/fa";

export const menuOptions = [
    {
      "title": "HOTELES",
      "ico": <FaHotel className='color-header' />,
      "ref": "Hoteles"
    }, {
      "title": "ACTIVIDADES",
      "ico": <FaTicketAlt className='color-header' />,
      "ref": "ACTIVIDADES"
    }, {
      "title": "TRASLADOS",
      "ico": <FaBusAlt className='color-header' />,
      "ref": "TRASLADOS"
    }, {
      "title": "OFERTAS",
      "ico": <FaFireAlt className='color-header' />,
      "ref": "OFERTAS"
    },
  ]

  export  const destinationList = [
    { 
      "destination": "Cancún",
      "img": "https://nexustours.azurewebsites.net/img/destinos/cancun.jpg",
      "description": "Considerado como la puerta de entrada al Mundo Maya."
    }, {
      "destination": "Los Cabos",
      "img": "https://nexustours.azurewebsites.net/img/destinos/los_cabos.jpg",
      "description": "Descubre la hermosura del extremo sur de la península de Baja California."
    }, {
      "destination": "Acapulco",
      "img": "https://nexustours.azurewebsites.net/img/destinos/acapulco.jpg",
      "description": "Reconocido mundialmente como sinónimo de relajación y diversión."
    }, {
      "destination": "Mazatlán",
      "img": "https://nexustours.azurewebsites.net/img/destinos/mazatlan.jpg",
      "description": "La Perla del Pacífico, con inmejorables atardeceres y generosa gastronomía."
      }
    ]
