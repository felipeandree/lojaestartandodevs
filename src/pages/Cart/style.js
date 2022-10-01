import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column; 
  padding: 1.6rem;
  gap: 1rem; 
  align-items: center; 
  padding-bottom: 5rem;
`;

export const MainTitle = styled.h2`
  color: #81CAA8;
  color: var(--primary-color);
  display: flex;
  margin-top: 4rem;
  margin: 1rem 1.5rem;
  padding: 1.2rem 2.2rem 0.2rem;
  text-transform: capitalize;
`;


export const CartContainer = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
`