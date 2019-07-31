import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cartAction";
import Product from "../../components/Product/Product";
function AllProduct(props) {
  const { products } = props;
  const product_mapping =
    products &&
    products.map(product => {
      return (
        <Product
          id={product.id}
          title={product.name}
          price={product.price}
          img={product.images[0].url}
          addToCart={props.addToCart}
        />
      );
    });
  return (
    <div className="container">
      <div className={"row"}>{product_mapping}</div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    products: state.product.products
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => {
      dispatch(addToCart(product));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProduct);
