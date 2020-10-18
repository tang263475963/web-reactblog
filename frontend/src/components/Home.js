import React, { Component } from 'react'
import Slides from './Slides'
import { Button, Container, Col, Row, Badge } from 'reactstrap';

import img1 from '../images/big/img1.jpg'
import img2 from '../images/big/img2.jpg'
import img3 from '../images/big/img6.jpg'

export default class Home extends Component {
    
    render() {
        return (
            
            <div className = 'front'>
                <hr />
                <Container>
                <Row className="justify-content-center front">
                        <Col md="7" className="text-center">
                        <h3><Badge color="dark">WEB BLOG!</Badge>{' '}</h3>
                            <h2 className="title">ยินดีต้อนรับเข้าสู้เว็บไซต์ของเรา!</h2>
                            <h6 className="subtitle">เว็บไซต์นี้เป็นเว็บไซต์แบบง่าย จำลองการใช้งานเว็บไซต์สไตล์ Web-Blog เพื่อให้ผู้ใช้งานได้ลองพิมพ์ข้อความหรือเรื่องราวที่ต้องการ หรือบอกต่อหรือสื่อให้กับผู้อิ่น ผ่านเว็บไซต์ของเรา</h6>
                            <hr/>
                        </Col>
                    </Row>
                <a href="/login" className="justify-content-center" className="front">
                        <Button block={true} variant="contained" color="warning" size="lg" >
                            <h3>เขียนเรื่องราวของคุณดูสิ</h3>
                        </Button>
                        <hr/>
                    </a>
                    <Slides />
                    <hr/>
                    <Row className="justify-content-center front">
                        <Col md="7" className="text-center">
                        <h2 className="title">You can do it!</h2>
                            <hr/>
                            <img src={img1} width='600' />
                            <hr/>
                            <h5>เล่าเรื่องราวต่างๆ ของคุณให้ผู้คนได้รับรู้</h5>
                            <hr/>
                            <img src={img2} width='600' />
                            <hr/>
                            <h5>แชร์ประสบการณ์ ต่างๆ กันอย่างมากมาย</h5>
                            <hr/>
                            <img src={img3} width='600' />
                            <hr/>
                            <h5>ฝากความทรงจำ ความรู้สึกดีๆไว้กับเรา</h5>
                            <hr/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
