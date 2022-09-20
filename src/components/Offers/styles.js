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
  padding: 14px 4px;
  flex-direction: row;
  `;

const SectionTitle = styled.h2`
  display: flex;
  text-align: start;
  padding: 5rem;
  color: #ffff;
`;
const Card = styled.div`
  `
const CardTitle = styled.h2`
    color: white;
    margin-bottom: 2rem;
    display: flex;
    top: 0;
`;
const CardBottom = styled.div`
display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
  gap: 8px;
`;
const CardImg = styled.div`
  height: 100%;
  width: 15rem;
  > img {
    border-radius: 10%;
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
