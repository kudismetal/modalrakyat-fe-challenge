import React from 'react';
import { Col } from 'react-bootstrap';

const FooterLink = ({ footerLinkData }) => {
    return (
        <Col md={4}>
            <a href={ `#footer${ footerLinkData.replace(/\s/g, '') }` }>{ footerLinkData }</a>
        </Col>
    )
}

export default FooterLink;