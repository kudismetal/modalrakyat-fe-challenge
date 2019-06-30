import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Interests = ({ interestData }) => {
    return (
        <div>
            <Row>
                <Col md={ 2 } xs={ 2 } className='d-flex align-items-center justify-content-center'>
                    <Image src={ interestData.img } className='img-fluid' />
                </Col>
                <Col md={ 10 } xs={ 10 }>
                    <Row>
                        <p><strong>{ interestData.name }</strong></p>
                    </Row>
                    <Row>
                        <p className='text-muted'>{ interestData.followers } followers</p>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Interests;