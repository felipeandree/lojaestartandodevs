import React from "react";
import {
  CardNovidade,
  CardNovidadeSections,
  Titulo,
  CardImg,
  Card,
  Price,
} from "./styles";

const fotoOferta = [
  {
    url: "/img/mousepad.png",
    title: "Ofetra-1",
  },
  {
    url: "/img/chaveiro.png",
    title: "Oferta-2",
  },
  {
    url: "/img/caneca.png",
    title: "Oferta-3",
  },
];

export const Offers = () => {
  return (
    <CardNovidade>
      <Titulo>
        <h2>Ofertas</h2>
      </Titulo>

      <CardNovidadeSections style={{ color: "#81CAA8" }}>
        <CardImg>
          <Card>
            <img src={fotoOferta[0].url} alt='Mousepad Dark Estartando Devs' />
          </Card>

          <Price>
            <p>A partir de R$19,90</p>
            <p>Desenvolva com estilo!</p>
          </Price>
        </CardImg>
        <CardImg>
          <Card>
            <img src={fotoOferta[1].url} alt='Mousepad Light Estartando Devs' />
          </Card>

          <Price>
            <p>A partir de R$19,90</p>
            <p>Desenvolva com estilo!</p>
          </Price>
        </CardImg>
        <CardImg>
          <Card>
            <img src={fotoOferta[2].url} alt='Mousepad Dark Estartando Devs' />
          </Card>
          <Price>
            <p>A partir de R$19,90</p>
            <p>Desenvolva com estilo!</p>
          </Price>
        </CardImg>
      </CardNovidadeSections>
    </CardNovidade>
  );
};
