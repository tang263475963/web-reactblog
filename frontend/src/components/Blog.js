import React, { Component } from 'react';
import axios from 'axios';
import {
    Table, Col, Row, Form, FormGroup, Label, Input, Button,
    Card, Container, CardText, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import img1 from '../images/big/img1.jpg'

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            id: 0,
            title: '',
            description: '',
            photo: '',
            user: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/blog')
            .then((res) => {
                this.setState({
                    blogs: res.data,
                    id: 0,
                    title: '',
                    description: '',
                    photo: '',
                    user: ''
                })
                console.log(res.data);
            })
    }

    /*    titlechange = event => {
           this.setState({
               title: event.target.value
           })
       }
   
       descriptionchange = event => {
           this.setState({
               description: event.target.value
           })
       }
   
       photochange = event => {
           this.setState({
               photo: event.target.value
           })
       }
       userchange = event => {
           this.setState({
               user: event.target.value
           })
       }
   
       submit(event, id) {
           event.preventDefault()
           if (id === 0) {
               axios.post(`http://localhost:8000/api/blog/`, { title: this.state.title, description: this.state.description, photo: this.state.photo, user: this.state.user, })
                   .then(() => {
                       this.componentDidMount();
                   })
           } else {
               axios.put(`http://localhost:8000/api/blog/${id}`, { title: this.state.title, description: this.state.description, photo: this.state.photo, user: this.state.user, })
                   .then(() => {
                       this.componentDidMount();
                   })
           }
       }
   
       delete(id) {
           axios.delete(`http://localhost:8000/api/blog/${id}`)
               .then(() => {
                   this.componentDidMount();
               })
       }
   
       edit(id) {
           axios.get(`http://localhost:8000/api/blog/${id}`)
               .then((res) => {
                   console.log(res.data)
                   this.setState({
                       id: res.data._id,
                       title: res.data.title,
                       description: res.data.description,
                       photo: res.data.photo,
                       user: res.data.user
                   })
               })
       }
    */

    render() {
        return (
            <div>
                <Container>
                    <hr />
                    <a href="/blogform" className="justify-content-center" className="front">
                        <Button block={true} variant="contained" color="warning" size="lg" >
                            TELL YOUR STORY !
                        </Button>
                    </a>
                    <Col md="12" className="text-center front"  >
                    <h3>ลองเขียน live style ของคุณดูสิ</h3>
                    </Col>
                    <hr />
                </Container>
                <Row>
                    
                            <Col  className="front" lg="4" md="6" >
                                <Card >
                                    <a href={'/blog/'}><img className="card-img-top" src={img1} alt="Hi" /></a>
                                    <h5 className="font-medium m-t-30"><a href={'/blog/'}  className ='b'>กรุงเทพชีวิตดี ๆ ที่ลงตัว</a></h5>
                                    <p className="m-t-20">ชีวิตที่สะดวกสบายบางที่ก็ไม่จำเป็นต้องยึดติดสิ่ง</p>
                                    <a href={'/blog/'} className="linking text-themecolor m-t-10 b">ชายผู้น่าเบื่อ<i className="ti-arrow-right "></i></a>
                                </Card>
                            </Col>
                        
                    
                
                
                    {
                        this.state.blogs.map(B =>
                            <Col  className="front" lg="4" md="6" key={B._id}>
                                <Card >
                                    <a href={'/blog/' + B._id}><img className="card-img-top" src={img1} alt="Hi" /></a>
                                    <h5 className="font-medium m-t-30"><a href={'/blog/' + B._id} className ='b'>{B.title}</a></h5>
                                    <p className="m-t-20">{B.description}</p>
                                    <a href={'/blog/' + B._id} className="linking text-themecolor m-t-10 b">{B.user}<i className="ti-arrow-right"></i></a>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
                <hr/>
            </div>
        )
    }
}
