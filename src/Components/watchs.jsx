
import React from "react";
import styled from "styled-components";
import { Tilt } from "react-tilt";

const WatchCard = ({ watch }) => (
  <Tilt options={{ max: 15, scale: 1.05, speed: 1000 }}>
    <CardDivContainer>
      <img src={watch.watchImg} alt={watch.model} />
      <h3>{watch.brand}</h3>
      <p>Modelo: {watch.model}</p>
      <p>Puntos: {watch.points}</p>
      <p>Material del cristal: {watch.crystalMaterial}</p>
    </CardDivContainer>
  </Tilt>
);

export default WatchCard;

const CardDivContainer = styled.div`
  background: white;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  width: 200px;
  min-height: 320px;
 
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5), 0 0 10px rgba(255, 255, 255, 0.6);
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 40px;
  }

  h3 {
    margin: 8px 0 4px;
      font-size: 15px;
      color: black;
      margin-bottom: 20px;
  }

  p {
    font-size: 13px;
    margin: 2px 0;
    color: #161616;
  }
`;
