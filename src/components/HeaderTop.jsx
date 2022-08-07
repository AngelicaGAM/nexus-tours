import "../css/header.css"
import { Col} from 'react-bootstrap';

const HeaderTop = () => {
    return(
        <Col style={{ background: 'black'} }>
            <img 
            style={{marginLeft: '10%'}}
            src="https://nexustours.azurewebsites.net/img/logo.png" 
            alt="img"/>
        </Col >
    )
}
export default HeaderTop;
