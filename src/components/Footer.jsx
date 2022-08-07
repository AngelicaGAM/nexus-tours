import "../css/footer.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = (() => {
    return (
      <Container fluid className="WrapperFooter"> 
        <Row  className="footer-Container">
          <Col lg="4" className="cal12">
          <img src="	https://nexustours.azurewebsites.net/img/logo.png" alt="img"/>
          <p className="text-footer">Ofrecemos servicios de reservación de hoteles, actividades, tours, traslados, paquetes de viaje y mucho más!</p>
          </Col>
          <Col lg="4">
          <h1 className="title-text-Ofertas" > Ofertas de Hoteles</h1>
          <a href="/Hoteles/Cancún" className="border-href">
            <h3 className="text-Ofertas">Hoteles en Cancún</h3>
          </a>
          <a href="/Hoteles/Los-Cabos" className="border-href">
            <h3 className="text-Ofertas">Hoteles en Los Cabos</h3>
          </a>
          <a href="/Hoteles/Acapulco" className="border-href" >
            <h3 className="text-Ofertas">Hoteles en Acapulco</h3>
          </a>
          <a href="/Hoteles/Mazatlán" className="border-href" >
            <h3 className="text-Ofertas">Hoteles en Mazatlán</h3>
          </a>
          </Col>
          <Col lg="4">
            <h4 className="title-text-Ofertas">Asistencia personalizada</h4>
            <h4 className="text-orange">55 5555 5555 </h4>
            <h4 className="text-orange"> soporte@nexustours.com</h4>
          </Col>
        </Row>
      </Container>

    )
})

export default Footer;
