import React, { Component } from "react";
import Product from "../../components/Product/Product";
import { Container, Row, Col } from "reactstrap";
export default class AllProduct extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    fetch("http://5d3814b9f898950014c5236d.mockapi.io/product/")
      .then(response => {
        return response.json();
      })
      .then(json => this.setState({ products: json }));
  }
  render() {
    const all_product = this.state.products.map(product => {
      return (
        <Col md={"3"}>
          <Product
            key={product.id}
            id={product.id}
            title={product.name}
            subtitle={product.price}
            description={product.description}
            img={product.images[0].url}
          />
        </Col>
      );
    });
    return (
      <div>
        <Container>
          <Row>
            {this.state.products.length > 0 ? all_product : <h1>Loading</h1>}
          </Row>
        </Container>
      </div>
    );
  }
}
