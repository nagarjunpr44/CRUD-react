import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'

const Heading = () => {
  return (
    <>
    <Navbar color='dark' dark>

<Container className='d-flex justify-content-between'>
    <NavbarBrand href='/'>
       User List
    </NavbarBrand>
    <Nav>
        <NavItem>
            <Link className='btn btn-primary' to="/add">Add User</Link>
        </NavItem>
    </Nav>
</Container>
    </Navbar>
    </>
  )
}

export default Heading