import React, { Component } from 'react'
import { Row, Col, Container, Card, CardBody, Badge} from 'reactstrap';

export default class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                        <h3>Heading <Badge color="dark">Know us</Badge>{' '}</h3>
                            <h2 className="title">ยินดีที่คุณเข้ามาใช้เว็บไซต์ของเรา</h2>
                            <h6 className="subtitle">เว็บไซต์นี้สร้างขึ้นมาเพื่อทำการศึกษาระบบการทำงานของ React JS และระบบเว็บไซต์ Blog เพื่อการเรียนรู้ในการสร้างเว็บไซต์แบบง่ายๆ</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
