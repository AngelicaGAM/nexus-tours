import { FaStar, FaAngleRight } from "react-icons/fa";
import { Looper } from "../utils/functions"
import { Container, Row, Col } from 'react-bootstrap';
import "../css/promotions.css"
const Promotions = () => {
    
    return(
         <Container fluid>
           <Row className="bg-image">
                <Col className="col-text">
                    <div className="content-text">
                        <h2 className='text-promotion '> PROMOCIÓN DE ÚLITMO MINUTO </h2>
                        <h5 className='sub-text-promotion'>Hard Rock Hotel Cancún </h5>
                        <div className="div-star">
                        <Looper times={5} className="mx-5">
                            <FaStar  
                            color="#f37021 " 
                            fontSize="1.7rem" />
                        </Looper>
                        </div>
                        <p className="details-promotion"> 2 Adultos - 5 días y 4 Noches </p>
                        <p className="price-promotion text-white">$2,900 / persona</p>
                        <button 
                         className="btn-promotion"
                         href="/Hotel/hard-rock-hotel-cancun"
                         >
                         RESERVAR  
                         <FaAngleRight /> 
                        </button>    
                    </div>
                </Col>
            </Row>
        </Container>
   
    )
}
export default Promotions ;
