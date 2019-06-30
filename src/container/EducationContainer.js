import React from 'react';
import Education from '../components/Education';
import { Card } from 'react-bootstrap';

const EducationContainer = ({ educationContainerData }) => {
    return (
        <Card className='border-0'>
            <Card.Body>
                <Card.Title>Education</Card.Title>
                {
                    educationContainerData.map((data, i) => {
                        return <Education educationData={ data } key={ i }></Education>
                    })
                }
            </Card.Body>
        </Card>
    )
}

export default EducationContainer;