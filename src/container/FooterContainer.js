import React from 'react';
import { Row, Col, Container, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterLink from '../components/FooterLink';

const FooterContainer = ({ footerContainerData }) => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={[ 'fab', 'linkedin' ]} className='fa-2x'></FontAwesomeIcon>
                    </Col>
                </Row>    
                <Row>
                    <Col md={6}>
                        <Row>
                            {
                                footerContainerData.footerLinks.map((data, i) => {
                                    return <FooterLink footerLinkData={ data } key={ i }></FooterLink>;
                                })
                            }
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={6}>
                                <Row>
                                    <Col>
                                        <a href='#questions'>
                                            <Row>
                                                <Col md={ 3 } xs={ 3 } className='d-flex align-items-center justify-content-center'>
                                                    <FontAwesomeIcon icon={[ 'fas', 'question-circle' ]}></FontAwesomeIcon>
                                                </Col>
                                                <Col>
                                                    <Row>
                                                        <p className='m-0'><strong>Questions?</strong></p>
                                                    </Row>
                                                    <Row>
                                                        <p className='text-muted m-0'>Visit our Help Center.</p>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <a href='#settings'>
                                            <Row>
                                                <Col md={ 3 } xs={ 3 } className='d-flex align-items-center justify-content-center'>
                                                    <FontAwesomeIcon icon={[ 'fas', 'cogs' ]}></FontAwesomeIcon>
                                                </Col>
                                                <Col>
                                                    <Row>
                                                        <p className='m-0'><strong>Manage your account and privacy.</strong></p>
                                                    </Row>
                                                    <Row>
                                                        <p className='text-muted m-0'>Go to your settings.</p>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </a>
                                    </Col>
                                </Row>    
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col><p className='text-muted'>Select Languange</p></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                                Select Languange
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                {
                                                    footerContainerData.languange.map((data, i) => {
                                                        return <Dropdown.Item href={ `#languange${ data.replace(/\s/g, '') }` } key={ i }>{ data }</Dropdown.Item>
                                                    })
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>   
                </Row>
                <Row>
                    <Col>
                        <p className='text-muted'>LinkedIn Corporation @ 2018</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterContainer;