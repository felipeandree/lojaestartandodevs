import styled from "styled-components";

export const CardNovidade = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px 4px;
    gap: 8px;
    background-color: #242424;
    width: 100%;
  `
  export const CardNovidadeSections = styled.div`
      display: flex;
      align-items: center;
      flex-direction: row;
      
    `

  export const Titulo = styled.h2`
      display: flex;
      text-align: start;
      padding: 4px;
      color: #ffffff;
   `
  export const CardImg = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 4px;
    gap: 8px;

  `
  export const Card = styled.div`
    height: 120px;
    width: 120px;
  `

  export const Price = styled.div`
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
  `

  // export const text = styled.div`
  //   text-align: left;
  //   vertical-align: top;
  //   font-size: 16px;
  //   font-family: Open Sans;
  //   line-height: 20%;
  //   color: #ffffff;
  // `
  

// export const CardBody = styled.div`
//   width: 100vw;
//   height: auto;
//   background-color #242424; 
//   display: flex;
//   flex-direction: row;
//   flexwrap: wrap;
//   boxSizing: border-box;

//   & > img {
//     display: flex;
//     flex-direction: column;
//     flexwrap: wrap;
//     width: 50%;
//     height: auto;
//     margin: 10px;   
//   }

// `

// export const Title = styled.h1`
//   background-color: #242424;
//   width: 100vw;
//   padding: 20px 30px; 
 
// `