import React from "react";
import styled from "styled-components";
import { db } from "../firebase";

const Container = styled.div`
  background-color: #ffffff;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  border-radius: 4px;
`;

const Title = styled.span``;

const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;

const Rating = styled.div`
  display: flex;
`;

const ProductImage = styled.img`
  max-height: 200px;
  object-fit: contain;
  margin-top: 12px;
`;

const AddToCartButton = styled.button`
  width: 200px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  height: 30px;
  cursor: pointer;
`;

const ActionSection = styled.div`
  display: grid;
  place-items: center;
  margin-top: 12px;
`;

function Product(props) {
  const { title, price, rating, image, id } = props;

  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartItems").doc(id).set({
          name: title,
          image: image,
          price: price,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Price>${price}</Price>
      <Rating>
        {Array(rating)
          .fill()
          .map((star, index) => (
            <span key={index}>⭐</span>
          ))}
      </Rating>
      <ProductImage src={image} alt="" />
      <ActionSection>
        <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product;
