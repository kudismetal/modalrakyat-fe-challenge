import React from 'react';
import Accomplishments from '../components/Accomplishments';
import { Card } from 'react-bootstrap';

const AccomplishmentsContainer = ({ accomplishmentsContainerData }) => {
    return (
        <Card className='shadow-sm rounded-0'>
            <Card.Body>
                <Card.Title>Accomplishments</Card.Title>
                {
                    accomplishmentsContainerData.map((data, i) => {
                        return <Accomplishments accomplishmentsData={ data } key={ i }></Accomplishments>;
                    })
                }
            </Card.Body>
        </Card>
    )
}

export default AccomplishmentsContainer;