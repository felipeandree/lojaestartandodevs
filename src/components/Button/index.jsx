import { PrimaryButton } from "./style";

export const Button = ({description}) => {
    return (
        <PrimaryButton> 
            <button>{description}</button>
        </PrimaryButton>
    )
}


/*  <Button description={'Comprar >'} /> SERA INSERIDO NA PAGINA QUE UTILIZAR O BUTTON */ 