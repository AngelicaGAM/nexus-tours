import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardHotel from "./CardHotel"

const HotelsList = ({hotels}) => {
    return (
    <Container>
      <Row style={{margin:" 0 5% 0 5%"}}>
         { hotels.map((data) => (
         <CardHotel 
          key={data.hotelId}
          {...data} 
         /> ))}
      </Row>
    </Container>
    );
}
export default HotelsList;
