import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import FeedRecommendation from '../components/FeedRecommendation';

const FeedRecommendationContainer = ({ feedRecommendationData }) => {
    return (
        <div>
            <Card className='shadow-sm rounded-0'>
                <Card.Body className='p-2'>
                    <Card.Title className='h6'>
                        Add to your feed
                    </Card.Title>
                    <ListGroup variant='flush'>
                        {
                            feedRecommendationData.map((data, i) => {
                               return <FeedRecommendation recommendationData={ data } key={ i }></FeedRecommendation>
                            })
                        }
                    </ListGroup>
                    <Card.Link href="#"><strong>View all recommendations</strong></Card.Link>
                </Card.Body>    
            </Card>
        </div>
    )
}

export default FeedRecommendationContainer;

