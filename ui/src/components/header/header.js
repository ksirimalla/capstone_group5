import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setupUser } from '../../store/features/userReducer';

function Header() {
    const userDetails = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [isAdminRole, setIsAdminRole] = useState(false);

    useEffect(() => {
        if (userDetails) {
            setIsAdminRole(userDetails.role === 'Admin');
        }
    }, [userDetails])

    function handleLogout() {
        dispatch(setupUser({}));
        navigate("/");
    }

    return (
        <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href={isAdminRole ? '/admin' : '/customer'}>Branchless Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={isAdminRole ? '/admin' : '/customer'}>Home</Nav.Link>
                        {isAdminRole ? <>
                            <Nav.Link href="/admin/customers">Customers</Nav.Link>
                            <Nav.Link href="/admin/accounts" disabled>Accounts</Nav.Link>
                        </>
                            : <>
                                <Nav.Link href="/customer/profile">Profile</Nav.Link>
                                <Nav.Link href="/customer/accounts">Accounts</Nav.Link>
                            </>}

                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: {userDetails && userDetails.firstName + " " + userDetails.lastName}
                    </Navbar.Text>
                    <Navbar.Text className="mx-4">
                        <a href="#" onClick={handleLogout}>Logout</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
