import styled from "styled-components";


export const CardOffer = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 8px;
  background-color: #242424;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  height: 100%;
`;
export const CardOfferSections = styled.div`
  color: "#81CAA8";
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  flex-direction: row;
  `;

export const SectionTitle = styled.h1`
  color: #ffff;
  display: flex;
  padding: 1rem;
  text-align: center;
`;
export const Card = styled.div`
  margin: 1rem;
  margin-bottom: rem;
`;
export const CardTop = styled.div`
  display: flex;
  justify-content: center;
`;
export const CardTitle = styled.h2`
 margin-bottom: 2rem;
  top: 0;
  
  > a:link, a:visited, a:hover {
    text-decoration: none;
    color: white;
  }
`;
export const CardBottom = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
`;
export const CardImg = styled.div`
  height: 100%;
  width: 15rem;

  > img {
    border-radius: 10%;
  }
`;