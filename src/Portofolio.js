// import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import './style.css'
export default class Inti extends Component {
  render() {
    return (
      <>
        <Portofolio />
        <Second />
        <Third />
        <Fourth />
        <Fiveth />
      </>
    )
  }
}

class Portofolio extends Component {
  render() {
    return (
      <div className="section-1">
        <div className="shape" />
        <div className="main">
          <Navbar>
            <Navbar.Brand href="/" className="nb">
              <img height="43" width="43" src="./logo (1).png" alt="gambar" />
            </Navbar.Brand >
            <Navbar.Brand className="nx">
              <h5>David Cynman</h5>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">

              <Nav.Link className="text-nav" href="/">Work</Nav.Link>
              <Nav.Link className="text-nav" href="/">About</Nav.Link>
            </Navbar.Collapse>

          </Navbar>
          <Container className="content">
            <div >
              <p className="text-1">I’m a Santa Barbara based UX/UI designer with a background in psychological and anthropological research. Empathy and empiricism drive my process.</p>
              <a href="/" className="text-2"><strong>Get in Touch</strong></a>

            </div>

          </Container>

        </div>

      </div>
    )
  }
}

class Second extends Component {
  render() {
    return (
      <div className="section-2" style={{ height: 950 }} >
        <Container fluid >
          <Row >
            <Col >
              <Container className="margin">
                <img width="200" src="./Group 5.1.png" className="center" alt="gambar" />
                <p className="text-1">Berry Lane Partners and Liberty Hudson Construction</p>
                <h2 className="text-2">Real estate investing from the ground up</h2>
                <p className="text-3">BRAND IDENTITY / DESIGN</p>
                <p className="text-4">
                  <a href="/" className="text-0">Read Case Study</a>
                </p>
              </Container>
            </Col>
            <Col >
              <Container className="item">
                <img width="900" src="./bxbMockup.png" alt="gambar" />
              </Container>
            </Col>
          </Row>

        </Container>

      </div>
    )
  }
}

class Third extends Component {
  render() {
    return (
      <div className="section-3" style={{ height: 950 }}>
        <Container fluid>
          <Row>
            <Col >
              <Container className="margin">
                <img width="700" src="./ebcMockup.png" alt="gambar" />
              </Container>
            </Col>
            <Col>
              <img width="400" src="./ebcLogo.png" className="center" alt="gambar" />
              <h5 className="text-1">The Center for Mindfulness and Human Potential</h5>
              <h1 className="text-2">Teacher tools for mindful classrooms</h1>
              <p className="text-3">UX Research + Design / UI Design</p>
              <p className="text-4"><a href="/" className="text-0">Read Case Study</a></p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

class Fourth extends Component {
  render() {
    return (
      <div className="section-4" style={{ height: 950 }}>
        <Container fluid >
          <Row>
            <Col>
              <Container className="margin">
                <img width="100" src="./rwlogo.png" className="center" alt="gambar" />
                <h5 className="text-1">Renter’s Wallet</h5>
                <h1 className="text-2">Stop losing rental docs.
                  Save money.</h1>
                <p className="text-3">UX Research + Design / UI Design</p>
                <p className="text-4"><a href="/" className="text-0">Read Case Study</a></p>
              </Container>

            </Col>
            <Col>
              <img className="gambar" height="400" src="./15-inch-macbook-pro-retina.png" alt="gambar" />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

class Fiveth extends Component {
  render() {
    return (
      <div className="section-5" >
        <Container fluid >
          <Row>
            <Col>
              <p className="text-1">Get in Touch</p>
              <p className="text-2">Thanks for stopping by. If you have any questions, please feel free to reach out.</p>
              <img className="center" width="200" src="./Icons.png" alt="gambar" />
              <p className="text-3">DESIGNED AND DEVELOPED BY DAVID CYNMAN</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
