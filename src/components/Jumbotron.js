import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import styled from 'styled-components'
import banner from '../assets/banner.jpg'

const Styles = styled.div`
.jumbo {
    background: url(${banner}) no-repeat fixed bottom;
    background-size: cover;
    color: #FFC0CB;
    height: 200px;
    position: relative;
    z-index: -2;
}


.overlay {
    background-color: #CBC3E3;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`;

export const Jumbotron = () => (
    
    <Styles>
        <Container fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome To Nates Mod Reviews and more</h1>
                <p>Welcome to my fansite for various modding tools for games. i also have a couple of my projects here aswell</p>
            </Container>
        </Container>
    </Styles>
)

class JumbotronComponent extends Component {
    render() {
        return <Jumbotron />;
    }
}

export default JumbotronComponent;