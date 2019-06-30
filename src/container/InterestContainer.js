import React from 'react';
import Interest from '../components/Interest';
import { Card, Row, Col } from 'react-bootstrap';

const InterestContainer = ({ interestContainerData }) => {
    return (
        <Card className='shadow-sm rounded-0'>
            <Card.Body>
                <Card.Title>Interest</Card.Title>
                <Row>
                    {
                        interestContainerData.map((data, i) => {
                            return (
                                <Col md={6} key={ i }>
                                    <Interest interestData={ data }></Interest>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Card.Body>
        </Card>
    )
}

export default InterestContainer;