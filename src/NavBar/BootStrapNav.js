import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import 'bootstrap/dist/css/bootstrap.min.css';

const BootStrap = () => {
    return (
        <div style={{ backgroundColor: '#4b6d98' }}>
            <Navbar variant="dark" sticky="top" >
                <Navbar.Brand href="#home">Far From Home</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                    <Nav.Link href="https://github.com/aviadbourla">  <GitHubIcon color="action" fontSize="large" /></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/aviad-bourla/">  <LinkedInIcon color="action" fontSize="large" /></Nav.Link>
                </Form>
            </Navbar>

        </div>
    )
}
export default BootStrap
