import React, { Component } from 'react';
import axios from 'axios';
import { Table, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            id: 0,
            name: '',
            slug: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/category')
            .then((res) => {
                this.setState({
                    id: 0,
                    name: '',
                    slug: ''
                })
                console.log(res.data);
            })
    }

    namechange = event => {
        this.setState({
            name: event.target.value
        })
    }

    slugchange = event => {
        this.setState({
            slug: event.target.value
        })
    }


    submit(event, id) {
        event.preventDefault()
        if (id === 0) {
            axios.post(`http://localhost:8000/api/category/`, { name: this.state.name, slug: this.state.slug})
                .then(() => {
                    this.componentDidMount();
                })
        } else {
            axios.put(`http://localhost:8000/api/category/${id}`, { name: this.state.name, slug: this.state.slug})
                .then(() => {
                    this.componentDidMount();
                })
        }
    }

    delete(id) {
        axios.delete(`http://localhost:8000/api/category/${id}`)
            .then(() => {
                this.componentDidMount();
            })
    }

    edit(id) {
        axios.get(`http://localhost:8000/api/category/${id}`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    id: res.data._id,
                    name: res.data.name,
                    slug: res.data.slug

                })
            })
    }


    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>slug</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.category.map(p =>
                                        <tr key={p._id}>
                                            <td> {p.name} </td>
                                            <td> {p.slug} </td>

                                            <td>
                                                <Button color="warning" onClick={(e) => this.edit(p._id)}>Edit</Button>{' '}
                                                <Button color="danger" onClick={(e) => this.delete(p._id)} >Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Form onSubmit={(e) => this.submit(e, this.state.id)}>
                            <FormGroup row>
                                <Label md={2}>ชื่อสินค้า</Label>
                                <Col md={10}>
                                    <Input type="text" onChange={(e) => this.namechange(e)} value={this.state.name} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2}>รายละเอียด</Label>
                                <Col md={10}>
                                    <Input type="text" onChange={(e) => this.slugchange(e)} value={this.state.slug} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button color="success">บันทึกข้อมูล</Button>
                                </Col>
                            </FormGroup>
                        </Form>



                    </Col>
                </Row>
            </div>
        )
    }
}