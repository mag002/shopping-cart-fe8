import React from "react";
import { connect } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import {
  addUserInfo,
  removeFromCart,
  checkOut
} from "../../actions/cartAction";

import "./style.css";
const Modal = props => {
  return (
    <div className={`modal-overlay ${props.open ? "open" : ""}`}>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <input type="text" value={props.name} onChange={props.change} />
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
            onClick={props.click}
          >
            Close
          </a>
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
            onClick={props.submit}
          >
            Agree
          </a>
        </div>
      </div>
    </div>
  );
};
class AllProduct extends React.Component {
  state = {
    open: false,
    userName: ""
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  changeUserName = event => {
    this.setState({ userName: event.target.value });
  };
  handleSubmit = () => {
    this.props.addInfo(this.state.userName);
    this.setState({ open: false });
    this.props.checkout({
      name: this.state.userName,
      products: this.props.cart
    });
  };
  render() {
    const allCartProduct =
      this.props.cart &&
      this.props.cart.map(product => {
        return (
          <CartItem
            title={product.name}
            img={product.image}
            price={product.price}
            size={product.size}
            remove={this.props.removeProduct}
            id={product.id}
          />
        );
      });
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col m8">{allCartProduct}</div>
            <div className="col m4">
              <div className="card left-align" style={{ padding: "10px 20px" }}>
                <h5>Total: {this.props.total}</h5>
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  onClick={this.handleClick}
                >
                  Submit
                  <i className="material-icons right">payment</i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal
          open={this.state.open}
          click={this.handleClick}
          name={this.state.userName}
          change={this.changeUserName}
          submit={this.handleSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart.products,
    total: state.cart.total
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addInfo: name => {
      dispatch(addUserInfo(name));
    },
    removeProduct: id => {
      dispatch(removeFromCart(id));
    },
    checkout: cart => {
      dispatch(checkOut(cart));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProduct);
