import React from 'react'
import { Component } from 'react'
import { Carousel, Button, Container, Card} from 'react-bootstrap'
import ffx1 from '../images/ffx1.jpg'
import ffx2 from '../images/ffx2.png'
import ffx3 from '../images/ffx3.jpg'
import icon from '../images/icon.png'
import SideNav from './SideNav'
import {Card as Media} from 'react-bootstrap'
import { NavigationBar } from '../NavigationBar'

class Home extends Component {
    render() {
        return (
            <Container>
                <NavigationBar></NavigationBar>
                <div>
                    <Media>
                        <div>
                            <Media.Body className="border border-dark">
                                <img className="img-thumbnail" src={icon} />
                                <h3>FFXIV A Realm Reborn</h3>
                                <p>Final Fantasy XIV Online, also known collectively with its initial relaunched title Final
                                    Fantasy XIV: A Realm Reborn</p>
                                <h4>For Texture Modding tools Click This</h4>

                            </Media.Body>
                        </div>
                    </Media>

                    <Carousel>
                        <Carousel.Item >
                            <img style={{ 'height': "600px" }} className="d-block w-100 img-thumbnail" src={ffx1} alt="First slide"></img>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img style={{ 'height': "600px" }} className="d-block w-100 img-thumbnail" src={ffx2} alt="Second slide"></img>
                        </Carousel.Item >
                        <Carousel.Item >
                            <img style={{ 'height': "600px" }} className="d-block w-100 img-thumbnail" src={ffx3} alt="Third slide"></img>
                        </Carousel.Item>
                    </Carousel>
                    <SideNav />
                    <p>Final fantasy XIV A Realm Reborn.
                        The MMORPG is a great game if you have not played it.
                        There are many ways to go about modding this game.
                        ill share the various tools and such that are best and what websites to go to when you need to download said tools in this guide</p>
                    <div className="row">

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>FFXIV Mod Archive</Card.Title>
                                <Card.Text>
                                    This is where you will be Downloading the TextureModding tool for your ingame models.
                                </Card.Text>
                                <Button href="https://www.xivmodarchive.com/" variant="primary">FFXIV Mod Archive</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Nexus mods</Card.Title>
                                <Card.Text>
                                This is the place where you will be getting the mods or different shaders and like a parser which will tell you, your damage per second that you deal.
                                </Card.Text>
                                <Button href="https://www.nexusmods.com/finalfantasy14" variant="primary">Nexus Mods</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        )
    }
}
export default Home;
