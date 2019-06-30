import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Volunteer = ({ volunteerData }) => {
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
                                <Col><strong>{ volunteerData.name }</strong></Col>
                            </Row>
                            <Row>
                                <Col>{ volunteerData.office }</Col>
                            </Row>
                            <Row>
                                <Col className='text-muted'>{ volunteerData.time } | { volunteerData.long }</Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Volunteer;