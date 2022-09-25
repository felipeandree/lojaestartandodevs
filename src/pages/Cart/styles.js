import styled from "styled-components";

const CartContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-end;
> * {
    margin: 2rem;
} 
> :nth-child(1) {
    width: 50%;
}
`


export default CartContainer