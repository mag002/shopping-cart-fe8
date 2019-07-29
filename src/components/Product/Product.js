import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <Link to={`${props.match.url}/${props.id}`}>
              <h3>{props.title}</h3>
            </Link>
          </CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText>{props.description}</CardText>
          <Button>Add to Cart</Button>
        </CardBody>
      </Card>
    </div>
  );
}
