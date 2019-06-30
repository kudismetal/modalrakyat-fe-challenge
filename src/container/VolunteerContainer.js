import React from 'react';
import { Card } from 'react-bootstrap';
import Volunteer from '../components/Volunteer';

const VolunteerContainer = ({ volunteerContainerData }) => {
    return (
        <Card className='border-0'>
            <Card.Body>
                <Card.Title>Volunteer</Card.Title>
                {
                    volunteerContainerData.map((data, i) => {
                        return <Volunteer volunteerData={ data } key={ i }></Volunteer>
                    })
                }
            </Card.Body>
        </Card>
    )
}

export default VolunteerContainer;