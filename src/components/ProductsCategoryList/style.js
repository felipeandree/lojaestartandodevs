import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column; 
  padding: 1.6rem;
  gap: 1rem; 
  align-items: center; 
  padding-bottom: 5rem;
`;

const MainTitle = styled.h2`
  color: #81CAA8;
  color: var(--primary-color);
  display: flex;
  margin-top: 4rem;
  margin: 1rem 1.5rem;
  padding: 1.2rem 2.2rem 0.2rem;
  text-transform: capitalize;
`;

export const  MissingProducts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.5rem 0.5rem 1.5rem 0.5rem;
  gap: 0.5rem;
`
export const MissingMessage = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 24px;
  font-family: Open Sans;
  line-height: 24%;
  color: #ffffff;
`
export {  Main, MainTitle }