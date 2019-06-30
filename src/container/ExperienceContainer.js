import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Experience from '../components/Experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExperienceContainer = ({ experienceContainerData }) => {
    return (
        <Card className='border-0'>
            <Card.Body>
                <Card.Title>Experience</Card.Title>
                {
                    experienceContainerData.map((data, i) => {
                        return <Experience experienceData={ data } key={ i }></Experience>
                    })
                }
                <Row>
                    <Col>
                        <a href='#showMore'>Show more <FontAwesomeIcon icon={[ 'fas', 'chevron-down' ]}></FontAwesomeIcon></a>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ExperienceContainer;