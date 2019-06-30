import React from 'react';
import { Form, Card, Button, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StatusPost = () => {
    return (
        <div>
            <Card className='shadow-sm rounded-0'>
                <Card.Body className='p-3'>
                    <Form className='my-0 py-0'>
                        <Form.Group className='my-1'>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                    </Form>
                    <hr className='my-0'></hr>
                    <ButtonToolbar className='mt-1 justify-content-between'>
                        <div>
                            <Button variant='outline-secondary' size='sm' className='mr-1 p-2' style={{ borderRadius: '40px' }}>
                                <FontAwesomeIcon icon={[ 'fas', 'edit' ]}></FontAwesomeIcon> Write an article
                            </Button>
                            <Button variant='outline-secondary' size='sm' className='mr-1 p-2' style={{ borderRadius: '40px' }}>
                                <FontAwesomeIcon icon={[ 'fas', 'camera' ]}></FontAwesomeIcon> Images
                            </Button>
                            <Button variant='outline-secondary' size='sm' className='mr-1 p-2' style={{ borderRadius: '40px' }}>
                                <FontAwesomeIcon icon={[ 'fas', 'video' ]}></FontAwesomeIcon> Video
                            </Button>
                        </div>
                        <div>
                            <Button variant='primary' size='sm' className='m-1 mr-0'>
                                Post
                            </Button>
                        </div>
                    </ButtonToolbar>
                </Card.Body>
            </Card>
        </div>
    )
}

export default StatusPost;