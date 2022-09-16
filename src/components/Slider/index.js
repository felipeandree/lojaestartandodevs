import React from "react";
import Foto01 from "../../Assets/Images/img/mousepad.png";
import Foto02 from "../../Assets/Images/img/chaveiro.png";
import Foto03 from "../../Assets/Images/img/caneca.png";
import { Titulo } from "./styles"
import { CardNovidade } from "./styles";
import { Text } from "./styles"; 
import { Imgprecomsg } from "./styles";
import { Precoemsg} from "./styles"
import { Card } from "./styles";

export const Slider = () => {
    return (
      <CardNovidade>
        <Titulo>
          <Text>Ofertas</Text>
        </Titulo>
        
        <Imgprecomsg>
          <Card>
            <img src={Foto01} alt="Mousepad Dark Estartando Devs" />
          </Card>

            <Precoemsg>
                <p>A partir de R$19,90</p>
                <p>Desenvolva com estilo!</p>
            </Precoemsg>
        </Imgprecomsg>
        <Imgprecomsg>
          <Card>
            <img src={Foto02} alt="Mousepad Light Estartando Devs" />
          </Card>

            <Precoemsg>
                <p>A partir de R$19,90</p>
                <p>Desenvolva com estilo!</p>
            </Precoemsg>
        </Imgprecomsg>
        <Imgprecomsg>
        <Card>
            <img src={Foto03} alt="Mousepad Dark Estartando Devs" />
        </Card>
            <Precoemsg>
                    <p>A partir de R$19,90</p>
                    <p>Desenvolva com estilo!</p>
            </Precoemsg>

        </Imgprecomsg>
      </CardNovidade>
    )
  }
  