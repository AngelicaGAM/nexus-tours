
import { menuOptions } from '../utils/data'
import HeaderTop from "../components/HeaderTop"
import { Container, Row , Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
      <Container fluid >
        <Row>
          <HeaderTop />
          <Navbar bg="light" expand="lg"  variant="dark"  className="border-menu ">
            <Container fluid className='container-nav-header'>  
              <div className="nav-header">
                <Navbar.Brand href="#home" > </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"   />
              </div>
              <Navbar.Collapse id="basic-navbar-nav" className="header-nav-bar">
                <Nav>
                  { menuOptions.map(( option ) => (
                  <div key={option.title} className="header-menu">
                    
                    <Nav.Link  
                    href="#Hoteles">
                      {option.ico} <br/> 
                      <span className="color-header"> 
                        {option.title} 
                      </span> 
                    </Nav.Link>
                  </div>
                  ))}
                </Nav>
              </Navbar.Collapse>
            </Container>  
          </Navbar>
        </Row> 
      </Container>  
    )

}

export default Header;
