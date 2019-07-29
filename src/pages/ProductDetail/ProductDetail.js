import React, { Component } from "react";

export default class ProductDetail extends Component {
  state = {
    id: this.props.match.params.idsanpham,
    detail: {}
  };
  componentDidMount() {
    fetch(`http://5d3814b9f898950014c5236d.mockapi.io/product/${this.state.id}`)
      .then(response => {
        return response.json();
      })
      .then(json => this.setState({ detail: json }));
  }
  render() {
    return (
      <div>
        <img
          src={this.state.detail.images ? this.state.detail.images[0].url : ""}
        />
        <h1>{this.state.detail.name}</h1>
      </div>
    );
  }
}
