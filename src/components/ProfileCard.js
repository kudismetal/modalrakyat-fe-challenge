import React from 'react';
import { Card, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import './ProfileCard.css';

const ProfileCard = ({ profileCardData }) => {
    return (
        <div>
            <Card className='text-center shadow-sm rounded-0'>
                <Card.Img src={ profileCardData.img } variant='top' height='auto' width="100%"></Card.Img>
                <Card.Body>
                    <Image src={ profileCardData.img } className='avatar' height='auto' width='75' />
                    <Card.Title>{ profileCardData.name }</Card.Title>
                    <Card.Subtitle className='text-muted'>{ profileCardData.position }</Card.Subtitle>
                </Card.Body>
                <ListGroup className="list-group-flush py-0">
                    <ListGroupItem className='py-1'>
                        <h5 className='text-primary'>{ profileCardData.viewed }</h5>
                        <p className='py-0 my-0'>Who's viewed your profile</p>
                        <hr></hr>
                        <h5 className='text-primary'>{ profileCardData.connection }</h5>
                        <p className='py-0 my-0'>Connections</p>
                        <p className='py-0 my-0'><strong>Manage your network</strong></p>
                    </ListGroupItem>
                </ListGroup>
                <Card.Footer className='py-1'>
                    <p className='text-muted pb-0 mb-0'>Access exclusive tools and insight</p>
                    <p className='pb-0 mb-0'><strong>Free Upgrade to Premium</strong></p>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ProfileCard;