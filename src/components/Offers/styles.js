import styled from "styled-components";

const CardOffer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #242424;
  width: 100%;
`;
const CardOfferSections = styled.div`
  color: "#81CAA8" 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 4px;
  flex-direction: row;
  `;

const SectionTitle = styled.h2`
  color: #ffff;
  display: flex;
  padding: 1rem;
  text-align: start;
`;
const Card = styled.div`
margin-left: 1rem;
  `
const CardTitle = styled.h2`
  color: white;
  display: flex;
  margin-bottom: 5rem;
  top: 0;
`;
const CardBottom = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
`;
const CardImg = styled.div`
  height: 100%;
  width: 18rem;

  > img {
    border-radius: 10%;
  }
`;

const Price = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 15px;

  > div {
    text-align: left;
    vertical-align: top;
    font-size: 16px;
    font-family: Open Sans;
    line-height: 20%;
  }

  > .info {
    color: #81caa8;
  }

  > .slogan {
    color: #fff;
  }
`;
export {
  Price,
  Card,
  CardImg,
  SectionTitle,
  CardOfferSections,
  CardOffer,
  CardTitle,
  CardBottom,
};
