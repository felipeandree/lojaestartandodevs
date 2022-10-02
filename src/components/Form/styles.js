import styled from "styled-components";

export const FormContainer = styled.div `
    display: flex;
    flex-direction: column;
    padding: 0 2.3rem;
    margin: 0 1rem;  
`

export const Label = styled.label `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 14px;
    font-family: Open Sans;
    line-height: 16px;
    color: #ffffff;
    text-align: center;
    padding-left: 0.8rem;
`

export const Input = styled.input`
    border-radius: 0.4rem;
    display: flex;
    width: 100%;
    justify-content: start;
    padding: 1rem 0; 
    margin: 0.2rem 0.5rem; 
    gap: 0.2rem;
    background-color: #606062;
    margin-bottom: 2rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 4rem 2.10rem; 
 

`