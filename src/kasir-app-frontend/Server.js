// import axios from 'axios'
// import React, { Component } from 'react'
// import { Card, Navbar, Nav, NavDropdown, Container, Button, Col, Row } from 'react-bootstrap'
// import { API_URL } from './constants'
// import { numberWithCommas } from './utils'



// export default class Server extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       menus: []
//     }
//   }

//   getData = () => {
//     axios.get(API_URL + "products")
//       .then(res => {
//         const data = res.data
//         this.setState({ menus: data })
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   }

//   componentDidMount() {

//     this.getData()
//   }
//   render() {
//     console.log(this.state.menus);
//     return (
//       <div>
//         <NavbarComponent />
//         <div className="mt-3">
//           <Container fluid>
//             <Row>
//               <ListCategories />
//               <Col>
//                 <h4><strong>Daftar Produk</strong></h4>
//                 <hr />
//                 <Row>
//                   {this.state.menus && this.state.menus.map((menu) => (
//                     <Col md={4} xs={6} className="mb-4" key={menu.id}>
//                       <Card className="shadow" >
//                         <Card.Img variant="top" src={"assets/images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar} />
//                         <Card.Body>
//                           <Card.Title>{menu.nama}</Card.Title>
//                           <Card.Text>
//                             Rp.{numberWithCommas(menu.harga)}
//                           </Card.Text>
//                           <Button variant="primary">Go somewhere</Button>
//                         </Card.Body>
//                       </Card>

//                     </Col>
//                   ))}
//                 </Row>
//               </Col>
//               <Hasil />
//             </Row>
//           </Container>
//         </div>
//       </div>
//     )
//   }
// }

// class NavbarComponent extends Component {
//   render() {
//     return (
//       <Navbar expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">Kasir-App</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">Link</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>

//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     )
//   }
// }



// class ListCategories extends Component {
//   render() {
//     return (
//       <Col md={2} mt="2">
//         <h4><strong>Daftar Kategori</strong></h4>
//         <hr />
//       </Col>
//     )
//   }
// }

// class Hasil extends Component {
//   render() {
//     return (
//       <Col md={3} mt="2">
//         <h4><strong>Hasil</strong></h4>
//         <hr />
//       </Col>
//     )
//   }
// }
