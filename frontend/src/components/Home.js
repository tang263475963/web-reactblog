import React, { Component } from 'react'
import Slides from './Slides'
import { Button, Container, Col } from 'reactstrap';

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <hr />
                
                <Slides />
                <hr />
                <Container>
                <a href="/blogform" className="justify-content-center" className="front">
                        <Button block={true} variant="contained" color="warning" size="lg" >
                            TELL YOUR STORY !
                        </Button>
                    </a>
                    <hr/>
                <Col md="12" className="text-center" className="padding">
                <h2>TELL YOUR STORY !</h2>
                </Col>
                </Container>
            </div>
        )
    }
}
