import { Link } from "react-router-dom";
import styled from "styled-components";
import beer from "../assets/beer.jpg";

function Home() {
  const Background = styled.div`
    width: 100%;
    height: 500px;
    text-align: center;
    margin: 20px;
  `;

  const Button = styled.button`
    font-size: 30px;
    border: none;
    width: 350px;
    padding: 5px;
    border-radius: 30px;
    background-color: #f0c032;
    color: white;

    &: hover {
      background-color: #dbab1d;
      transition: 0.5s;
    }
  `;

  const Beer = styled.div`
    text-align: center;
    margin-top: 50px;
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${beer});
    background-repeat: no-repeat;
    background-size: cover;
  `;

  const Maintitle = styled.h1`
    color: white;
    font-size: 48px;
  `;

  return (
    <Background>
      <Beer>
        <Maintitle>I will drink until next morning</Maintitle>
        <Link to="/beerlist">
          <Button>Find your Beer</Button>
        </Link>
      </Beer>
    </Background>
  );
}

export default Home;
