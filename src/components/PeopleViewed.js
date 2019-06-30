import React from 'react';
import { ListGroup, Row, Col, Image } from 'react-bootstrap';

const PeopleViewed = ({ peopleViewed }) => {
    return (
        <ListGroup.Item className='p-0 border-0'>
            <Row>
                <Col md={ 3 } xs={ 3 } className='d-flex align-items-center justify-content-center'>
                    <Image src={ peopleViewed.img } className='img-fluid' />
                </Col>
                <Col md={ 9 } xs={ 9 }>
                    <Row>
                        <p><strong>{ peopleViewed.name }</strong> <span className='text-muted'> | { peopleViewed.number }</span></p>
                    </Row>
                    <Row>
                        <p className='text-muted'>{ peopleViewed.position }</p>
                    </Row>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default PeopleViewed;

