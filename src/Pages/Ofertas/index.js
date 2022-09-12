import { OfertasTitulo } from "./styles";
import mousepad from "../../Assets/Images/img/mousepad.png";
import chaveiro from "../../Assets/Images/img/chaveiro.png";
import caneca from "../../Assets/Images/img/caneca.png";

export const Ofertas = () => {
    return (
      <OfertasTitulo>
        <div>
          <h1>Ofertas</h1>
        </div>
        <div className="container">
          <div className="item">
            {/* <div className="image">
                        <img src={mousepad} />
                    </div> */}
            <div className="info">
              <div>
                <img src={mousepad} />
              </div>

              <h2 className="name">Mousepad dark</h2>
              <span className="price">A partir de R$ 19,90</span>
              <span className="description">Desenvolva com estilo!</span>
            </div>

            <div className="info">
              <div>
                <img src={mousepad} />
              </div>

              <h2 className="name">Mousepad dark</h2>
              <span className="price">A partir de R$ 19,90</span>
              <span className="description">Desenvolva com estilo!</span>
            </div>

            <div className="info">
              <div>
                <img src={mousepad} />
              </div>

              <h2 className="name">Mousepad dark</h2>
              <span className="price">A partir de R$ 19,90</span>
              <span className="description">Desenvolva com estilo!</span>
            </div>
            
          </div>
        </div>
      </OfertasTitulo>
    );
}