import React, { useState, Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }
    render() {
        // const [isOpen, setIsOpen] = useState(false);
        // const toggle = () => setIsOpen(!isOpen);
        const { navCollapsed } = this.state

        const loginRegLink = (
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/register">Register</NavLink>
                </NavItem>
            </Nav>
        )
        const userLink = (
            <Nav className="ml-auto" navbar>
                {localStorage.usertoken ?
                    <NavItem>
                        <NavLink tag={Link} to="/users">Users</NavLink>
                    </NavItem> : ''
                }
                <NavItem>
                    <NavLink tag={Link} to="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} onClick={this.logOut.bind(this)}>Logout</NavLink>
                </NavItem>
            </Nav>
        )
        return (
            <div>
                <Navbar color="warning" dark expand="md">
                    <NavbarBrand href="/">
                        <b className="logo-icon">
                            <img height='50' width='50' src={'/image/box.png'} alt="homepage" className="dark-logo" />
                        </b>
                    </NavbarBrand>
                    <NavbarBrand tag={Link} to="/">Bloggg!</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/blog">Content</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/about">About</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} to="/contact">Contact</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} to="/fileupload">Upload</NavLink>
                            </NavItem>




                        </Nav>

                        {localStorage.usertoken ? userLink : loginRegLink}

                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default withRouter(Header);