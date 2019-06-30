import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProfileCard from '../components/ProfileCard';
import StatusPost from '../components/StatusPost';
import FeedRecommendationContainer from './FeedRecommendationContainer';
import TimelineContainer from './TimelineContainer';

const HomeContainer = ({ data }) => {
    return (
        <div className='p-3'>
            <Row>
                <Col xs={ 12 } md={ 3 } className='mb-1'>
                    <ProfileCard profileCardData={ data.biodata } ></ProfileCard>
                </Col>
                <Col xs={ 12 } md={ 6 } className='mb-1'>
                    <Row>
                        <Col>
                            <StatusPost></StatusPost>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TimelineContainer timelineData={ data.feeds }></TimelineContainer>
                        </Col>
                    </Row>
                </Col>
                <Col xs={ 12 } md={ 3 } className='mb-1'>
                    <FeedRecommendationContainer feedRecommendationData={ data.feedRecommendations }></FeedRecommendationContainer>
                </Col>
            </Row>
        </div>
    )
}

export default HomeContainer;