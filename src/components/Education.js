import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Education = ({ educationData }) => {
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
                                <Col><strong>{ educationData.name }</strong></Col>
                            </Row>
                            <Row>
                                <Col>{ educationData.dept }</Col>
                            </Row>
                            <Row>
                                <Col className='text-muted'>{ educationData.year }</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='m-0'>{ educationData.activities }</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Education;