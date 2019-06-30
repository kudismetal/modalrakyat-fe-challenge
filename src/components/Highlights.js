import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Highlights = ({ highlightsData }) => {
    return (
        <div>
            <Card className='shadow-sm rounded-0'>
                <Card.Body>
                    <Card.Title>Highlights</Card.Title>
                    <Row>
                        <Col>
                            <Row>
                                <Col md={ 2 } xs={ 2 } className='d-flex justify-content-center align-items-center'>
                                    <FontAwesomeIcon icon={[ 'fas', 'user-friends' ]}></FontAwesomeIcon>
                                </Col>
                                <Col>
                                    <Row>{ highlightsData.mutual } Mutual Connections</Row>
                                    <Row className='text-muted'>
                                        You and { highlightsData.nick } 
                                        both know { highlightsData.mutualExample.map(data => { return `${data}, ` }) }
                                        and { highlightsData.mutual - highlightsData.mutualExample.length } others.
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                        <Row>
                            <Col md={ 2 } xs={ 2 } className='d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={[ 'fas', 'comments' ]}></FontAwesomeIcon>
                            </Col>
                            <Col>
                                <Row>Reach out { highlightsData.nick }</Row>
                                <Row className='text-muted'>{ highlightsData.reachOut }</Row>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className='text-center bg-white text-primary'>
                    <a href='#showMore'>Show more <FontAwesomeIcon icon={[ 'fas', 'chevron-down' ]}></FontAwesomeIcon></a>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Highlights;