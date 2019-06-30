import React from 'react';
import Status from '../components/Status';
import { DropdownButton, Dropdown, Col } from 'react-bootstrap';

const TimelineContainer = ({ timelineData }) => {
    return (
        <div>
            <div className='my-1 d-flex justify-content-end align-items-center'>
                <Col className='pl-0'>
                    <hr></hr>
                </Col>
                <Col md={ 4 } className='pr-0 d-flex justify-content-end align-items-center'>
                    <p className='my-0 mx-1'>Sort by :</p>
                    <DropdownButton id="dropdown-basic-button" title="Desc" size='sm' alignRight>
                        <Dropdown.Item href="#/action-1">Desc</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Asc</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </Col>                
            </div>
            <div>
                {
                    timelineData.map((data, i) => {
                        return <Status statusData={ data } key={ i }></Status>
                    })
                }
            </div>
        </div>
    )
}

export default TimelineContainer;