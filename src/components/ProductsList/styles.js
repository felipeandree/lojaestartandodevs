import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.0625rem solid #c4f5de;
  color: #ffffff;
`

const CardLeft = styled.div`
  margin-right: 1rem;
`

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
`

const CardBtn = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 1rem;
  margin-left: 10rem;

  > button {
  color: var(--primary-color);
  }
`

const AddProductCart = styled.span.attrs(() => ({ className: "material-symbols-outlined" }))`
    &:after {
      content: "add_shopping_cart";
    }
    color: var(--primary-color)
`;

const HeartPlus = styled.span.attrs(() => ({ className: "material-symbols-outlined" }))`
  flex-grow:0.5;
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

const CardSection = styled.div`
  /* display: flex;
  justify-content: center;
  flex-direction: column;  */
  padding: 1.6rem;
  gap: 1rem; 
  align-items: center; 
`;

const CardImage = styled.div`
  margin-bottom: 1rem;
`;

const CardRating = styled.div`
  display: inline-block;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin: 0; 
  padding: 0;
  
`
const CardInformations = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  gap: 0.375rem;
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 0.5rem;
  margin: 0.28rem;
  > p { 
    /* display: flex;
    justify-content: flex-start; */
  }
`

export { CardSection, CardBtn, CardLeft, CardRight, Card, AddProductCart, HeartPlus, StarRating, CardImage, CardRating, CardInformations, Text }