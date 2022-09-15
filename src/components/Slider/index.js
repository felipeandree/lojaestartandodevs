import React from "react";
import Mousepad from "../../Assets/Images/img/mousepad.png";
import Chaveiro from "../../Assets/Images/img/chaveiro.png";
import Caneca from "../../Assets/Images/img/caneca.png";
import { CardBody } from "./styles"
import { Title }  from "./styles"

export const SliderCard = () => {
    return(
        <div> 
            <Title> Ofertas </Title>
            <div> 
                <CardBody>   
                    <h2>Mousepad Dark</h2>
                    <img src={Mousepad} alt="Foto de Mousepad Estartando Devs" />
                    <p>A partir de R$ 19,90</p>
                    <p>Desenvolva com estilo</p>
                </CardBody>
                <CardBody>
                    <img src={Chaveiro} alt="Foto de Chaveiro Estartando Devs" />
                    <h2>Mousepad Dark</h2>
                    <p>A partir de R$ 19,90</p>
                    <p>Desenvolva com estilo</p>
                </CardBody>
                <CardBody>
                    <img src={Caneca}  alt="Foto de Caneca Estartando Devs"/>
                    <h2>Mousepad Dark</h2>
                    <p>A partir de R$ 19,90</p>
                    <p>Desenvolva com estilo</p>
                </CardBody>
            </div>
        </div>
        
    );
}
    