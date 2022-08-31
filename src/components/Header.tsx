import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(){
    return(
        <Navbar  collapseOnSelect  expand="lg"  variant="dark" className="bg-primary ml-auto" >
      
      <Link className="navbar-brand" to={'/'}>
            <h5 className="mr-50" >Logo</h5>
      </Link>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-left" id="responsive-navbar-nav">
          <Nav>
          <Link className="nav-link" to={'/sign-in'}>
          Login
        </Link>
        <Link className="nav-link" to={'/sign-up'}>
          Sign Up
        </Link>
            
          </Nav>
          
        </Navbar.Collapse>
     
    </Navbar>
    )
}
export default Header;