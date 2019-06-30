import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PeopleViewedContainer from './PeopleViewedContainer';
import ProfileHeader from '../components/ProfileHeader';
import Highlights from '../components/Highlights';
import Activity from '../components/Activity';
import InterestContainer from './InterestContainer';
import FooterContainer from './FooterContainer';
import AnyExperienceContainer from './AnyExperienceContainer';
import AccomplishmentsContainer from './AccomplishmentContainer';

const ProfileContainer = ({ data, footerData }) => {
    return (
        <div>
            <div className='p-3'>
                <Row className='my-2'>
                    <Col md={{ span: 8 }}>
                        <ProfileHeader profileHeaderData={ data.biodata }></ProfileHeader>
                    </Col>
                    <Col md={ 4 }>
                        <PeopleViewedContainer peopleViewedData={ data.peopleAlsoViewed }></PeopleViewedContainer>
                    </Col>
                </Row>
                <Row className='my-2'>
                    <Col md={{ span: 8 }}>
                        <Highlights highlightsData={ data.highlights }></Highlights>
                    </Col>
                </Row>
                <Row className='my-2'>
                    <Col md={{ span: 8 }}>
                        <Activity activityData={ data.activity }></Activity>
                    </Col>
                </Row>
                <Row className='my-2'>
                    <Col md={{ span: 8 }}>
                        <AnyExperienceContainer anyExperienceData={ data }></AnyExperienceContainer>
                    </Col>
                </Row>
                <Row className='my-2'>
                    <Col md={{ span: 8 }}>
                        <AccomplishmentsContainer accomplishmentsContainerData={ data.accomplishments }></AccomplishmentsContainer>
                    </Col>
                </Row>
                <Row className='my-2'>
                    <Col md={{ span: 8 }}>
                        <InterestContainer interestContainerData={ data.interest }></InterestContainer>
                    </Col>
                </Row>
            </div>
            <hr></hr>
            <div>
                <FooterContainer footerContainerData={ footerData } ></FooterContainer>
            </div>
        </div>
    )
}

export default ProfileContainer;