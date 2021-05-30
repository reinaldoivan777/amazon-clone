import React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";

const Container = styled.div`
  background-color: #ffffff;
  flex: 0.8;
  margin-right: 18px;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const ItemsContainer = styled.div``;

function CartItems({ cartItems }) {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        {cartItems.map((item) => (
          <CartItem item={item.product} id={item.id} key={item.id} />
        ))}
      </ItemsContainer>
    </Container>
  );
}

export default CartItems;
