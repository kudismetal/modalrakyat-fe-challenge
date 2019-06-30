import React from 'react';
import { Card, Row, Col, Image, ButtonToolbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Status = ({ statusData }) => {
    return (
        <Card className='shadow-sm rounded-0'>
            <Card.Body>
                <Row>
                    <Col md={ 2 } xs={ 2 } className='d-flex flex-column justify-content-center'>
                        <Image src={ statusData.profileImg } className='img-fluid' />
                    </Col>
                    <Col md={ 8 } xs={ 8 } className='d-flex flex-column'>
                        <Row>
                            <p className='m-0 p-0'><strong>{ statusData.name }</strong></p>
                        </Row>
                        <Row>
                            <p className='m-0 p-0'>{ statusData.position }</p>
                        </Row>
                        <Row>
                            <p className='m-0 p-0'>{ statusData.time }</p>
                        </Row>
                    </Col>
                    <Col md={ 2 } xs={ 2 }>
                        <FontAwesomeIcon icon={[ 'fas', 'ellipsis-h' ]} className='float-right'></FontAwesomeIcon>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant='top' src={ statusData.postImg }></Card.Img>
                            <Card.Body>
                                <Card.Title>{ statusData.postTitle }</Card.Title>
                                <Card.Subtitle className='text-muted'>{ statusData.postSubtitle }</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className='my-1'>{ statusData.like } Likes</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr className='my-0'></hr>
                    </Col>
                </Row>
                <ButtonToolbar className='my-1'>
                    <Button variant='link' size='sm' className='py-0 text-muted'>
                        <FontAwesomeIcon icon={[ 'fas', 'thumbs-up' ]}></FontAwesomeIcon> Like
                    </Button>
                    <Button variant='link' size='sm' className='py-0 text-muted'>
                        <FontAwesomeIcon icon={[ 'fas', 'comment' ]}></FontAwesomeIcon> Comment
                    </Button>
                    <Button variant='link' size='sm' className='py-0 text-muted'>
                        <FontAwesomeIcon icon={[ 'fas', 'share' ]}></FontAwesomeIcon> Share
                    </Button>
                </ButtonToolbar>
            </Card.Body>
        </Card>
    )
}

export default Status;