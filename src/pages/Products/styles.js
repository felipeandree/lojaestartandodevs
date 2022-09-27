import styled from "styled-components";

export const Body = styled.div`
  background-color: #242424;
`;

export const MainTitle = styled.h2`
  color: #81CAA8;
  padding: 18px 24px 4px;
  display: flex;
  color: var(--primary-color);
  margin: 1rem 1.5rem;
  margin-top: 4rem;
  text-transform: capitalize;
`;

export const Card = styled.section `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 0.0625rem solid #c4f5de;
  color: #ffffff;
  display: flex;
`

export const CardSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column; 
  padding: 1.6rem;
  gap: 1rem; 
  align-items: flex-start; 
`;

export const CardImage = styled.div`
  
`; 

export const CardRating = styled.div`
  display: inline-block;
  flex-direction: row;
  justify-content: center;
  align-items: center
  gap: 0.25rem;
  margin: 0; 
  padding: 0;
  
`
export const CardInformations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start
    justify-content: center;
    gap: 0.375rem;
`
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.375rem;
  padding: 0.5rem;
  margin: 0.28rem
`
export const CardTitle= styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1rem;
  
`


