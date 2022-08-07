import { destinationList } from '../utils/data'
import Title from "./Title"
import { Container, Row, Card, Col } from 'react-bootstrap';

const FavoriteDestination = () => {

    return(
      <Container>
        <Row>
          <Title txt="Destinos Favoritos"/>
          {destinationList.map((destination) => (
          <Col key={destination.destination} xs={12} md={3} className="DestinationCard">                
            <Card className="text-destination">
              <a  href="Ofertas">
                <Card.Img 
                className="img-destination"
                variant="top" 
                src={destination.img} />
              </a>       
            <Card.Body className="card-body mt-3"> 
              <Card.Title className="tittle-destination">{  destination.destination } </Card.Title>
              <Card.Text className="sbtittle-destination" >
              { destination.description}
              </Card.Text>     
            </Card.Body>
          </Card>         
          </Col>
          ))}
        </Row>
      </Container>

    )
}
export default FavoriteDestination;
