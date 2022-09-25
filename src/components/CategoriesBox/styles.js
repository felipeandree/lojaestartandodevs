import styled from "styled-components";

const CardOffer = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 8px;
  background-color: #242424;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  height: 100%;
`;
const CardOfferSections = styled.div`
  color: "#81CAA8" 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  flex-direction: row;
  `;

const SectionTitle = styled.h1`
  color: #ffff;
  display: flex;
  padding: 1rem;
  text-align: center;
`;
const Card = styled.div`
  margin: 1rem;
  margin-bottom: 5rem;
`;
const CardTitle = styled.h2`
  color: white;
  display: flex;
  margin-bottom: 5rem;
  text-align: center;
  top: 0;
  > a:link, a:visited, a:hover {
    text-decoration: none;
    color: white;
  }
`;
const CardBottom = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
`;
const CardImg = styled.div`
  height: 100%;
  width: 15rem;

  > img {
    border-radius: 10%;
  }
`;

export {
  Card,
  CardBottom,
  CardImg,
  CardOffer,
  CardOfferSections,
  CardTitle,
  SectionTitle,
};
