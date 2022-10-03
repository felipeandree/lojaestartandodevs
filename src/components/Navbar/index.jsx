import { Icons } from "./styles";
import "material-symbols";

export const Navbar = () => {
    return(
        <Icons > 
            <div> 
                <span className="material-symbols-outlined">favorite</span>
            </div>

            <div> 
                <img src="/img/logo-navbar.png" alt="Foto de Logo" ></img>
            </div>

            <div>
                <span className="material-symbols-outlined">shopping_cart</span>
            </div>
        </Icons>
            
       
    );
}