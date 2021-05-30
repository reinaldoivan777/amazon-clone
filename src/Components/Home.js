import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "../Components/Product";
import { db } from "../firebase";

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const Banner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
  padding: 0 10px;
  margin-top: -350px;
  display: flex;
  flex-wrap: wrap;
`;

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];

      tempProducts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          product: doc.data(),
        };
      });
      setProducts(tempProducts);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Banner />
      <Content>
        {products.map((data) => (
          <Product
            key={data.id}
            title={data.product.name}
            price={data.product.price}
            rating={data.product.rating}
            image={data.product.image}
            id={data.id}
          />
        ))}
      </Content>
    </Container>
  );
}

export default Home;
