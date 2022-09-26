import styled from "styled-components";

const MainProducts = styled.h2`
color: #FFFF;
margin: 2rem 4rem;
margin-top: 4rem;

`
const Card = styled.div`
display: flex;
margin-bottom: 4rem;
`

const CardTop = styled.div`

`

const CardBottom = styled.div`

`

const CardBtn = styled.div`
> button {
color: var(--primary-color);
}`

const AddProductCart = styled.span.attrs(() => ({ className: "material-symbols-outlined" }))`
  &:after {
    content: "add_shopping_cart";
  }
  color: var(--primary-color)
`;

const HeartPlus = styled.span.attrs(() => ({ className: "material-symbols-outlined" }))`
  &:after {
    content: "heart_plus";
  }
  color: var(--primary-color)
`;

const StarRating = styled.span.attrs(() => ({ className: "material-symbols-outlined" }))`
  &:after {
    content: "star";
  }
  color: var(--primary-color)
`

export { MainProducts, CardBtn , CardTop, CardBottom, Card, AddProductCart, HeartPlus, StarRating }