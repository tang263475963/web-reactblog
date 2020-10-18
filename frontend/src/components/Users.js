import React, { Component } from 'react'
import axios from 'axios';
import { Table, Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            id: 0,
            name: '',
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api')
            .then((res) => {
                this.setState({
                    user: res.data,
                    id: 0,
                    name: '',
                    email: '',
                    password: ''
                })
                console.log(res.data);
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
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.user.map(user =>
                                        <tr key={user._id}>

                                            <td> {user.name} </td>
                                            <td> {user.email} </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }
}