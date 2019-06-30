import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import PeopleViewed from '../components/PeopleViewed';

const PeopleViewedContainer = ({ peopleViewedData }) => {
    return (
        <Card className='border-0'>
            <Card.Body>
                <Card.Title>People Also Viewed</Card.Title>
                <ListGroup className='border-0'>
                    {
                        peopleViewedData.map((data, i) => { 
                            return <PeopleViewed peopleViewed={ data } key={ i }></PeopleViewed>
                        })
                    }
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default PeopleViewedContainer;