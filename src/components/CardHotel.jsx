import "../css/card.css"
import { FaStar } from "react-icons/fa";
import { Looper } from "../utils/functions"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const CardHotel = (props) => {
  const {  locationInfo, mainPhoto , stars } = props;
  const state = locationInfo.state;
  const country = locationInfo.country;
  const city = locationInfo.city;
  const Photo = mainPhoto.baseUri;
  const price = Math.floor(Math.random()*(2500-1500+1)+1500);
    return (
      <Col   xs={12} md={4}>
        <Card className="card-hotel">
          <a className="hoverimg" href="Ofertas">
            <Card.Img 
            height="240"
            variant="top" 
            src={Photo ? Photo : "http://cdn.precioyviajes.com/03/38/34/03383470_tm.jpg"} />
          </a>          
          <Card.ImgOverlay>
             <h5 className="hover-btn">Reservar</h5>
          </Card.ImgOverlay>
          <Card.Body className="card-body"> 
            <Looper times={ Math.floor(stars) } >
              <FaStar  
               color="#f37021 " 
               fontSize="0.8rem" />
            </Looper>
            <Card.Title className="title-card">{city }</Card.Title>
            <Card.Text className="small">
              {state},  {  country }  <br/>
              desde  <span className="price-card">${price}</span>/ noche
            </Card.Text>     
          </Card.Body>
        </Card>
      </Col>
    );
}
export default CardHotel;
