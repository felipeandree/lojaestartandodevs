import styled from "styled-components";

export const CardOffer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  // padding: 2rem;
  flex-direction: row;
  `;

export const SectionTitle = styled.h1`
  color: #ffff;
  display: flex;
  padding: 1rem;
  text-align: start;
  text-decoration: none;
  > a:link, a:visited, a:hover {
    text-decoration: none;
    color: white;
  }

`;
export const Card = styled.div`
  margin: 1rem;
  margin-bottom: 5rem;
`;
export const CardTitle = styled.h2`
  color: white;
  display: flex;
  margin-bottom: 5rem;
  top: 0;
`;
export const CardBottom = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
`;
export const CardImg = styled.div`
  height: 100%;
  width: 18rem;

  > img {
    border-radius: 10%;
  }
`;

export const CardRight = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 2rem;

  > div {
    text-align: left;
    vertical-align: top;
    font-size: 16px;
    font-family: Open Sans;
    line-height: 20%;
   
  }

  > .price {
    color: #81caa8;    
  }

  > .description {
    color: #fff;
  }
`;
