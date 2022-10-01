import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column; 
  padding: 1.6rem;
  gap: 1rem; 
  align-items: center; 
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.0625rem solid #c4f5de;
  color: #ffffff;
  width: 30rem;
`

export const CardLeft = styled.div`
  margin-right: 1rem;
`

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* width: 20rem; */
`

export const CardBtn = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 1rem;
  margin-left: 10rem;

  > button {
  color: var(--primary-color);
  }
`

export const AddProductCart = styled.span.attrs(() => ({ className: "material-symbols-outlined" }))`
    &:after {
      content: "add_shopping_cart";
    }
    color: var(--primary-color)
`;

export const HeartPlus = styled.span.attrs(() => ({ className: "material-symbols-outlined" }))`
  flex-grow:0.5;
    &:after {
      content: "heart_plus";
    }
    color: var(--primary-color)
`;

export const StarRating = styled.span.attrs(() => ({ className: "material-symbols-outlined" }))` 
    &:after {
      content: "star";
    }
    color: var(--primary-color)
`

export const CardSection = styled.div`
  /* display: flex;
  justify-content: center;
  flex-direction: column;  */
  padding: 1.6rem;
  gap: 1rem; 
  align-items: center; 
`;

export const CardImage = styled.div`

  & > img {
    border-radius: 10px;
    float: left;
    width:  10rem;
    height: 10rem;
    object-fit: cover;
    margin-bottom: 1rem;
  }
`;

export const CardRating = styled.div`
  display: inline;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: -0.2rem; 
  white-space: nowrap;
  overflow: hidden;
`
export const CardInformations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  gap: 0.375rem;
`
export const Text = styled.div`
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

