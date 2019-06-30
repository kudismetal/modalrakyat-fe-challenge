import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from './SearchBar';

const NavBar = ({ searchData }) => {
    return (
        <Navbar bg='light' expand='lg' className='justify-content-between'>
            <div className='d-flex'>
                <Navbar.Brand href='#home'>
                    <FontAwesomeIcon icon={[ 'fab', 'linkedin' ]}></FontAwesomeIcon>
                </Navbar.Brand>
                <SearchBar searchData={ searchData }></SearchBar>
            </div>
            <div>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto align-items-center'>
                        <Nav.Link href="/">
                            <div className='d-flex flex-column align-items-center'>
                                <FontAwesomeIcon icon={[ 'fas', 'home' ]}></FontAwesomeIcon>
                                Home
                            </div>
                        </Nav.Link>
                        <Nav.Link href='#myNetwork'>
                            <div className='d-flex flex-column align-items-center'>
                                <FontAwesomeIcon icon={[ 'fas', 'user-friends' ]}></FontAwesomeIcon>
                                My Network
                            </div>
                        </Nav.Link>
                        <Nav.Link href='#jobs'>
                            <div className='d-flex flex-column align-items-center'>
                                <FontAwesomeIcon icon={[ 'fas', 'suitcase' ]}></FontAwesomeIcon>
                                Jobs
                            </div>
                        </Nav.Link>
                        <Nav.Link href='#messaging'>
                            <div className='d-flex flex-column align-items-center'>
                                <FontAwesomeIcon icon={[ 'fas', 'comments' ]}></FontAwesomeIcon>
                                Messaging
                            </div>
                        </Nav.Link>
                        <Nav.Link href='#notifications'>
                            <div className='d-flex flex-column align-items-center'>
                                <FontAwesomeIcon icon={[ 'fas', 'bell' ]}></FontAwesomeIcon>
                                Notifications
                            </div>
                        </Nav.Link>
                        <Nav.Link href='/profile'>
                            <div className='d-flex flex-column align-items-center'>
                                <FontAwesomeIcon icon={[ 'fas', 'user-circle' ]}></FontAwesomeIcon>
                                Me
                            </div>
                        </Nav.Link>
                        <Nav.Link href='#work'>
                            <div className='d-flex flex-column align-items-center'>
                                <FontAwesomeIcon icon={[ 'fas', 'th' ]}></FontAwesomeIcon>
                                Work
                            </div>
                        </Nav.Link>
                        <Nav.Link href='#upgrade'>Free Upgrade to Premium</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>            
        </Navbar>
    )
}

export default NavBar;