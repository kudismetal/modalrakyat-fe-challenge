import React from 'react';
import { Card, Row, Col, ListGroup, ButtonToolbar, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileHeader = ({ profileHeaderData }) => {
    return (
        <div>
            <Card className='shadow-sm rounded-0'>
                <Card.Img src={ profileHeaderData.img } variant='top' height='150'></Card.Img>
                <Card.Body>
                    <Image src={ profileHeaderData.img } className='avatar' height='75' width='75' roundedCircle />
                    <Row>
                        <Col>
                            <Card.Title>{ profileHeaderData.name }</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                <p>{ profileHeaderData.position }</p>
                                <p>{ profileHeaderData.country }</p>
                            </Card.Subtitle>
                            <ButtonToolbar>
                                <Col lg={4} xs={12} className='p-1'>
                                    <Button variant='primary' size='sm' className='mr-1' block>
                                        Connect
                                    </Button>
                                </Col>
                                <Col lg={4} xs={12} className='p-1'>
                                    <Button variant='outline-primary' size='sm' className='mr-1' block>
                                        InMail
                                    </Button>
                                </Col>
                                <Col lg={4} xs={12} className='p-1'>
                                    <Button variant='outline-secondary' size='sm' className='mr-1' block>
                                        More...
                                    </Button>
                                </Col>
                            </ButtonToolbar>
                        </Col>
                        <Col>
                            <ListGroup variant='flush'>
                                <ListGroup.Item className='p-1'>
                                    <Row>
                                        <Col md={ 1 }>
                                            <FontAwesomeIcon icon={[ 'fas', 'building' ]}></FontAwesomeIcon>
                                        </Col>
                                        <Col>
                                            <p className='m-0'>{ profileHeaderData.office }</p>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item className='p-1'>
                                    <Row>
                                        <Col md={ 1 }>
                                            <FontAwesomeIcon icon={[ 'fas', 'igloo' ]}></FontAwesomeIcon>
                                        </Col>
                                        <Col>
                                            <p className='m-0'>{ profileHeaderData.education }</p>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item className='p-1'>
                                    <Row>
                                        <Col md={ 1 }>
                                            <FontAwesomeIcon icon={[ 'fas', 'address-book' ]}></FontAwesomeIcon>
                                        </Col>
                                        <Col>
                                            <a href='#contactInfo'>See contact info</a>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item className='p-1'>
                                    <Row>
                                        <Col md={ 1 }>
                                            <FontAwesomeIcon icon={[ 'fas', 'user-friends' ]}></FontAwesomeIcon>
                                        </Col>
                                        <Col>
                                            <p className='m-0'>{ profileHeaderData.connection }+ connections</p>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Card.Text>
                        { profileHeaderData.summary }    
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center bg-white text-primary'>
                    <a href='#showMore'>Show more <FontAwesomeIcon icon={[ 'fas', 'chevron-down' ]}></FontAwesomeIcon></a>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ProfileHeader;