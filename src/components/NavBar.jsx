import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {logo} from "../utils/constants";
import SearchForm from "./SearchForm";

const NavBar = () => {
  return (
    <div className="navbar sticky-top" style={{backgroundColor:"black"}}>
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchForm />
      </Container>
    </div>
  );
};

export default NavBar;
