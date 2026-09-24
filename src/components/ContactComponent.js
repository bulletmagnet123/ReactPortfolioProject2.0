import React from 'react'
import { Component } from 'react';
import { Button, Label, Col, Row, Form, FormGroup, Input } from "reactstrap";
import SideNav from './SideNav';
import Jumbotron from './Jumbotron';
import NavigationBar from './NavigationBar';

const CONTACT_EMAIL = "wildnate@gmail.com";

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name, email, message } = this.state;
        const subject = encodeURIComponent(`Message from ${name || 'website visitor'}`);
        const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    }

    render() {
        return (
            <>
            <NavigationBar />
            <SideNav />
            <Jumbotron />
            
            <div className="container">
            <div className="col-md-10">
                <Form onSubmit={this.handleSubmit}>
                    <Row className="form-group">
                        <Label htmlFor="name" md={2}>Name</Label>
                        <Col md={10}>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                required
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="message" md={2}>Message</Label>
                        <Col md={10}>
                            <Input
                                type="textarea"
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Your Message"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                required
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="primary">
                                Send
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>     
            </div>
            </>
        )
    }
}

export default ContactComponent;