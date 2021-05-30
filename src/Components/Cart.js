import React from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0 18px;
`;

function Cart(props) {
  const { cartItems } = props;

  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotal />
    </Container>
  );
}

export default Cart;
