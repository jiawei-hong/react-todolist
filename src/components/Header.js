import {Link} from "react-router-dom";
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav} from "react-bootstrap";
import '../css/header.css';

function Header() {
    let paths = [
        {
            path: 'create',
            text: 'Create',
        }
    ];

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                <img
                    alt=""
                    src={logo}
                    width="75"
                    height="75"
                    className="d-inline-block align-top"
                />{' '}
                TodoList
            </Navbar.Brand>

            <Nav>
                {paths.map((x, i) => (
                    <Nav.Link as={Link} to="/create" key={i}>{x.text}</Nav.Link>
                ))}
            </Nav>
        </Navbar>
    );
}

export default Header;