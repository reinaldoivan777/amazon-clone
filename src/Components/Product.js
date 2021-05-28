import React from "react";
import styled from "styled-components";

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

const Rating = styled.div``;

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
`;

const ActionSection = styled.div`
  display: grid;
  place-items: center;
  margin-top: 12px;
`;

function Product() {
  return (
    <Container>
      <Title>Ipad Pro</Title>
      <Price>$ 1,449</Price>
      <Rating>⭐⭐⭐⭐⭐</Rating>
      <ProductImage
        src="https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/tablets/Apple_iPad_Pro_12_9_2020_/Apple_iPad_Pro_12_9_2020__L_1.jpg"
        alt=""
      />
      <ActionSection>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product;
