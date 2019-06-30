import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Accomplishments = ({ accomplishmentsData }) => {
    return (
        <div>
            <Card className='border-0'>
                <Card.Body>
                    <Row>
                        <Col md={ 2 } xs={ 2 } className='d-flex justify-content-center'>
                            <h1 className='text-primary'>{ accomplishmentsData.list.length }</h1>
                        </Col>
                        <Col md={ 8 } xs={ 8 }>
                            <Row>
                                <h5 className='text-primary'><strong>{ accomplishmentsData.name }</strong></h5>
                            </Row>
                            <Row>
                                <p className='text-muted'>
                                    {
                                        accomplishmentsData.list.map((data, i) => { 
                                            return i === accomplishmentsData.list.length-1 ? 
                                                `${data}` : `${data} | `
                                        })
                                    }
                                </p>
                            </Row>
                        </Col>
                        <Col md={ 2 } xs={ 2 } className='d-flex justify-content-end'>
                            <a href='#accomplishments'><FontAwesomeIcon icon={[ 'fas', 'chevron-down' ]}></FontAwesomeIcon></a>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Accomplishments;