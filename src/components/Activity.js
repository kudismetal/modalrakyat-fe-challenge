import React from 'react';
import { Card, Row, Col, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Activity = ({ activityData }) => {
    return (
        <div>
            <Card className='shadow-sm rounded-0'>
                <Card.Body>
                    <Row>
                        <Col md={ 9 } xs={ 9 }>
                            <Card.Title>{ activityData.nick }'s Activity</Card.Title>   
                        </Col>
                        <Col md={ 3 } xs={ 3 } className='d-flex justify-content-end'>
                            <Button block variant='outline-primary' size='sm' className='d-flex align-items-center justify-content-center'>
                                <div className='m-1'>
                                    <FontAwesomeIcon icon={[ 'fas', 'plus' ]}></FontAwesomeIcon>
                                </div> 
                                <div className='m-1'>
                                    <p className='m-0'>Follow</p>
                                </div>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Subtitle className="mb-2 text-muted">{ activityData.followers } followers</Card.Subtitle> 
                        </Col>
                    </Row>
                    {
                        activityData.activityList.map((data, i) => {
                            return (
                                <Row>
                                    <Col md={ 3 } xs={ 3 } className='d-flex align-items-center justify-content-center'>
                                        <Image src={ data.img } className='img-fluid' />
                                    </Col>
                                    <Col md={ 9 } xs={ 9 }>
                                        <p className='m-0'>{ data.about }</p>    
                                        <p className='text-muted'>{ activityData.nick } shared this</p>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                    <Row>
                        <Col>
                            <a href='#showMore'>See all activity</a>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Activity;