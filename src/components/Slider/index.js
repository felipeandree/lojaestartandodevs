import React from "react";
import Foto01 from "../../assets/images/img/mousepad.png";
import Foto02 from "../../assets/images/img/chaveiro.png";
import Foto03 from "../../assets/images/img/caneca.png";
import { Titulo } from "./styles"
import { CardNovidade } from "./styles";
import { CardNovidadeSections } from "./styles";
import { CardImg } from "./styles";
import { Price } from "./styles"
import { Card } from "./styles";

export const Slider = () => {
    return (
      <CardNovidade>

        <Titulo>
          <h2>Ofertas</h2>
        </Titulo>

        <CardNovidadeSections>
         <CardImg>
          <Card>
            <img src={Foto01} alt="Mousepad Dark Estartando Devs" />
          </Card>

            <Price>
                <p style={{color: "#81CAA8"}} >A partir de R$19,90</p>
              <p >Desenvolva com estilo!</p>
            </Price>
        </CardImg>
        <CardImg>
          <Card>
            <img src={Foto02} alt="Mousepad Light Estartando Devs" />
          </Card>

            <Price> 
                <p style={{color: "#81CAA8"}}>A partir de R$19,90</p>
                <p>Desenvolva com estilo!</p>
            </Price>
        </CardImg>
        <CardImg>
        <Card>
            <img src={Foto03} alt="Mousepad Dark Estartando Devs" />
        </Card>
            <Price>
                    <p style={{color: "#81CAA8"}}>A partir de R$19,90</p>
                    <p>Desenvolva com estilo!</p>
            </Price>

        </CardImg> 
        </CardNovidadeSections>
      </CardNovidade>
    )
  }
  