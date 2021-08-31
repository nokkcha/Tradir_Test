import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import ReactGA from "react-ga";

const Navigation = () => {
  const Header = styled.header`
    font-size: 30px;
    height: 150px;
    display: grid;
    grid-auto-flow: column;
    grid-template-column: 3fr 1fr 1fr;
    margin: 100px 30px 30px 30px;
    align-items: center;
  `;

  const Title = styled.h1`
    margin-left: 100px;
  `;
  const Menubar = styled.div`
    justify-self: end;
    margin-right: 100px;
  `;
  const Menu = styled(Link)`
    width: 250px;
    font-size: 40px;
    margin: 20px;
    color: black;
  `;

  return (
    <>
      <Header>
        <Title>Maekju Saseyo🍻</Title>
        <Menubar>
          <Menu to="/home">Home</Menu>
          <Menu to="/beerlist">Beer list</Menu>
          <Menu to="/cart">Cart</Menu>
        </Menubar>
      </Header>
    </>
  );
};

export default Navigation;
