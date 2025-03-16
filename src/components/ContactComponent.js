import React from 'react'
import { Component } from 'react';
import { Button, Label, Col, Row, } from "reactstrap";


const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    render() {
        return (
            <div className="col-md-10">
                
                    
            </div>
        )
    }
}
export default Contact;