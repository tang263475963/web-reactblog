import React, { Component } from 'react'
import { Row, Col, Container, Card, CardBody, Badge} from 'reactstrap';

import img1 from '../images/big/img1.jpg'
import img2 from '../images/big/img2.jpg'
import img3 from '../images/big/img6.jpg'


export default class About extends Component {
    render() {
        return (
            <div >
                 <hr/>
                <Container>
                    <Row className="justify-content-center front">
                        <Col md="7" className="text-center">
                        <h3>About <Badge color="dark">WEB BLOG!</Badge>{' '}</h3>
                            <h2 className="title">ยินดีที่คุณเข้ามาใช้เว็บไซต์ของเรา</h2>
                            <h6 className="subtitle">เว็บไซต์นี้สร้างขึ้นมาเพื่อทำการศึกษาระบบการทำงานของ React JS และระบบเว็บไซต์ Blog เพื่อการเรียนรู้ในการสร้างเว็บไซต์แบบง่ายๆ</h6>
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
                            <h5>ฝากความทรงจำความรู้สึกดีๆไว้กับเรา</h5>
                        </Col>
                    </Row>
                </Container>
                <hr/>
            </div>
        )
    }
}
