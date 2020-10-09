import React, { Component } from 'react';
import axios from 'axios';
import {
    Badge, Col, Row, Form, FormGroup, Label, Input, Button,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

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
        axios.get(`http://localhost:8000/api/blog/`)
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

    render() {
        return (
            <div>
                {
                    this.state.blogs.map(B =>
                        <Row className="justify-content-center">
                        <Col md="12" className="text-center" className="padding" key={B._id} >
                            {B.photo}
                            <h3>{B.title} <Badge color="dark">Blog</Badge>{' '}</h3>
                            <h6>{B.description}</h6>
                            <h4>{B.user}</h4>
                        </Col>
                        </Row>
                    )
                }
            </div>
        )
    }
}
