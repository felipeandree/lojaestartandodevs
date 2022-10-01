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
  justify-content: center;
  align-items: flex-start;
  width: 30rem;
  margin : 2rem 0;
  /* padding: 5rem;
  gap: 0.5rem; */
`
export const MissingMessage = styled.div`
  text-align: center;
  /* vertical-align: top; */
  font-size: 1.8rem;
  /* font-family: Open Sans; */
  /* line-height: 24%; */
  color: var(--alert-color);
`
export {  Main, MainTitle }