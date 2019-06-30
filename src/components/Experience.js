import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Experience = ({ experienceData }) => {
    return (
        <div>
            <Card className='border-0'>
                <Card.Body>
                    <Row>
                        <Col md={ 2 } xs={ 2 } className='d-flex justify-content-center'>
                            <FontAwesomeIcon icon={[ 'fas', 'building' ]} className='fa-3x'></FontAwesomeIcon>
                        </Col>
                        <Col md={ 10 } xs={ 10 }>
                            <Row>
                                <Col><strong>{ experienceData.name }</strong></Col>
                            </Row>
                            <Row>
                                <Col>{ experienceData.location }</Col>
                            </Row>
                            <Row>
                                <Col className='text-muted'>{ experienceData.time } | { experienceData.long }</Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ offset: 2 }} xs={ 12 }>
                            <p>{ experienceData.desc }</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Experience;