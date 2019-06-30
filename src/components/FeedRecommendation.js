import React from 'react';
import { ListGroup, Col, Row, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeedRecommendationContainer = ({ recommendationData }) => {
    return (
        <ListGroup.Item className='p-0'>
            <Row>
                <Col md={ 3 } xs={ 12 } className='d-flex align-items-center justify-content-center'>
                    <Image src={ recommendationData.img } className='img-fluid' />
                </Col>
                <Col md={ 6 } xs={ 12 } className='d-flex flex-column align-items-left'>
                    <strong><h6>{ recommendationData.name }</h6></strong>
                    <h6 className='text-muted'>{ recommendationData.as }</h6>
                </Col>
                <Col md={ 3 } xs={ 12 } className='d-flex align-items-center justify-content-center'>
                    <Button variant='outline-dark' block className='d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={[ 'fas', 'plus' ]}></FontAwesomeIcon> 
                    </Button>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default FeedRecommendationContainer;

