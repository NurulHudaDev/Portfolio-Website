import React from 'react';
import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap'
import WebDeveloparIcon from '../../Icon/web-developar-icon.png'
import GraphicDesignIcon from '../../Icon/graphic-design-icon.png'
import PhotoEditingIcon from '../../Icon/photo-editing-icon.png'
import './Servics.css'

const Servics = () => {
    return (
        <div>
            <Container>
                <h2 className='text-center servics-titel'>MY SERVICS</h2>
                <CardGroup className='servic-cards'>
                    <Card className='servic-card text-center'>
                        <Card.Body>
                            <img src={WebDeveloparIcon} alt='' />
                            <h2>web development</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Card.Body>
                    </Card>
                    <Card className='servic-card text-center'>
                        <Card.Body>
                            <img src={GraphicDesignIcon} alt='' />
                            <h2>graphic design</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Card.Body>
                    </Card>
                    <Card className='servic-card text-center'>
                        <Card.Body>
                            <img src={PhotoEditingIcon} alt='' />
                            <h2>photo editing</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>

        </div>
    );
};

export default Servics;