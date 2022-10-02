import React from "react";
import { FormContainer, Input, Label, ButtonContainer } from "./styles";
import { Button } from "components/Button";

export const Form = () => {
    return(
        <div>
            <FormContainer >
                <Label>Nome</Label>
                    <Input type="text"></Input>

                <Label>Telefone</Label>
                    <Input type="text" placeholder="( )"></Input>

                <Label>Email</Label>
                    <Input type="text"></Input>

            </FormContainer>

            <ButtonContainer>
                <Button description={"Próximo"}/>
            </ButtonContainer>

        </div>
    )
}       