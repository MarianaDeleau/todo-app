import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { menuItems } from "./items";
import { useAuth } from "../../../hooks/useAuth"
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

const NavbarApp = () => {
    const { userSession, logout } = useAuth()
   
    return (
    <Navbar collapseOnSelect  expand="lg" bg="dark" variant="dark">
        <Container>
                <Navbar.Brand className="fs-1 fw-bold">ToDO APP📌{userSession && <h6>Usuario: {`${userSession.name}`}</h6>}</Navbar.Brand>
               <Button variant="secondary" size="lg" active className="rounded-circle ms-3 mb-3" onClick={(e) => logout()}>
                    <FontAwesomeIcon icon={faPowerOff}/>
                </Button>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav variant="tabs" className="ms-auto justify-content-center">
                 {menuItems.map((item) => {
                     return (
                        <Nav.Item>
                            <Link to={item.href} className="navLink">{item.label}</Link>
                        </Nav.Item>
                            );
                 })}              
                </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
    )
};

  export { NavbarApp };