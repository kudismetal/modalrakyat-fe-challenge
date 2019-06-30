import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import EducationContainer from './EducationContainer';
import ExperienceContainer from './ExperienceContainer';
import VolunteerContainer from './VolunteerContainer';

const AnyExperienceContainer = ({ anyExperienceData }) => {
    return (
        <Card className='shadow-sm rounded-0'>
            <ListGroup variant="flush">
                <ListGroup.Item className='p-0'>
                    <ExperienceContainer experienceContainerData={ anyExperienceData.experience }></ExperienceContainer>
                </ListGroup.Item>
                <ListGroup.Item className='p-0'>
                    <EducationContainer educationContainerData={ anyExperienceData.education }></EducationContainer>
                </ListGroup.Item>
                <ListGroup.Item className='p-0'>
                    <VolunteerContainer volunteerContainerData={ anyExperienceData.volunteer }></VolunteerContainer>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default AnyExperienceContainer;