import styled from "styled-components";


export const CardBody = styled.div`
  width: 100vw;
  height: auto;
  background-color #242424; 
  display: flex;
  flex-direction: row;
  flexwrap: wrap;
  boxSizing: border-box;

  & > img {
    display: flex;
    flex-direction: column;
    flexwrap: wrap;
    width: 50%;
    height: auto;
    margin: 10px;   
  }

`

export const Title = styled.h1`
  background-color: #242424;
  width: 100vw;
  padding: 20px 30px; 
 
`