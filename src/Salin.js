import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default class Portofolio extends Component {
  render() {
    return (
      <div class="background">
        <div className="wrapper">
          <Navbar bg="light" expand="lg">
            <Container>
              <Nav className="me-auto">
                <div class="logo">
                  Logo
                  <h1 class="judul">David Cynman</h1>
                </div>
                <div>
                  <Nav.Link class="text-nav" href="#work">Work</Nav.Link>
                  <Nav.Link class="text-nav" href="about">About</Nav.Link>
                </div>
              </Nav>
            </Container>
          </Navbar>
        </div>
        <Container>
          <div class="text-1">
            <p>I’m a Santa Barbara based UX/UI designer with a background in psychological and anthropological research. Empathy and empiricism drive my process.</p>
            <a class="get" href="#">Get in Touch</a>

          </div>

        </Container>


        <Second />
        <Third />
        <Fourth />
        <Fiveth />

      </div>
    )
  }
}

class Second extends Component {
  render() {
    return (
      <div>
        <Container>
          <div>
            <img src="./Group 5.1.png" />
            <h5 class="header-text-2">Berry Lane Partners and Liberty Hudson Construction</h5>
            <h2 class="header-2">Real estate investing from the ground up</h2>
            <p class="text-2">BRAND IDENTITY / DESIGN</p>
            <a href="#" class="color-text-2">Read Case Study</a>
          </div>
          <div>
            <img src="./bxbMockup.png" />
          </div>

        </Container>

      </div>
    )
  }
}

class Third extends Component {
  render() {
    return (
      <div>
        <Container>
          <div>
            <img src="./ebcMockup.png" />
          </div>
          <div>
            <img src="./ebcLogo.png" />
            <h5>The Center for Mindfulness and Human Potential</h5>
            <h1>Teacher tools for mindful classrooms</h1>
            <p>UX Research + Design / UI Design</p>
            <a href="#">Read Case Study</a>

          </div>
        </Container>
      </div>
    )
  }
}

class Fourth extends Component {
  render() {
    return (
      <div>
        <Container>
          <div>
            <img src="./rwlogo.png" />
            <h5>Renter’s Wallet</h5>
            <h1>Stop losing rental docs.
              Save money.</h1>
            <p>UX Research + Design / UI Design</p>
            <a href="#">Read Case Study</a>
          </div>
          <div>
            <img src="./15-inch-macbook-pro-retina.png" />

          </div>
        </Container>
      </div>
    )
  }
}

class Fiveth extends Component {
  render() {
    return (
      <div>
        <Container>
          <div>
            <a href="#">Get in Touch</a>
            <p>Thanks for stopping by. If you have any questions, please feel free to reach out.</p>
            <div>
              <img src="./Icons.png" />
              <p>Designed and developed by David Cynman</p>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
