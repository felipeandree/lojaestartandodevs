import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
* {
    font-family: 'Ubuntu','Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #242424;
    text-decoration: none;
  }
  
  html {
    /* 62.5% of 16px browser font size is 10px */
    font-size: 62.5%;
  }
  
  :root {
    --primary-color: #81CAA8;
    --primary-color-dark: #478166;
    --primary-color-light: #C4F5DF;
    --neutral-color: #606062;
    --neutral-color-dark: #242424;
    --neutral-color-light: #FFFFFF;
    --alert-color: #AA3929;
    --error-color: #C06C5F;
    --swiper-theme-color: #81CAA8;
  }
  
  body {
    box-sizing: border-box;
    font-family: "Ubuntu", "Open Sans", "sans-serif";
    font-size: 1.6rem;
  }
  
  .material-symbols-rounded {
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
  }
  
  .iconfill {
    font-variation-settings: 'FILL' 1;
  }

  .header { 
    align-items: center;
    background-color: var(--neutral-color-dark);
    display: flex;
    height: 5rem;
    justify-content: space-between;
    width: 100%;
}

.header span {
    color: var(--primary-color);
    width: 4rem;
    display: inline;
}

.header img {
    height: 2.4rem;
    width: 2rem;
}

.input-header {
    background:  var(--neutral-color);
    height: 25px;
    margin: 8px 8px 8px 8px; 
    width: 100%;
} 

.input-header::placeholder {
    color: var(--neutral-color-light);
    font-family: Open sans;
    padding: 8px;
    font-size: 16px;
    
} 

.logo-input {
    background-color: var(--neutral-color);
    border-radius: 0.5rem;
    border-style:solid;
    border:none;
    color: var(--neutral-color-light);
    flex-grow: 2;
    font-family: "Open Sans";
    font-size: 1.5rem;
    font-weight: 300;
    height: 3.4rem;
    
}

.logo-input::placeholder{
    padding: 1rem;
    color: var(--neutral-color-light);
}
.home-title {
    color: var(--primary-color);
    font-family: "Ubuntu";
    font-size: 1rem;
    /* margin: -0.5rem; */
    padding: 0;
    overflow: hidden;
}

.menu-logo {
    margin: 3rem 2rem;
    text-align: center;
}

.header-icons, .header-icons * {
    margin: 0.5rem 1rem 1rem;
} 
  
.swiper-button-next, .swiper-button-prev {
color:#81CAA8;
background-color: #24242400;
}
  
.homeSection {
border-bottom: 0.2rem solid var(--primary-color)
}

.swiper-button-next,
.swiper-container-rtl .swiper-button-prev,
.swiper-button-prev, 
.swiper-container-rtl .swiper-button-next{
    background-image: none;
}

.swiper-button-next,
.swiper-button-prev, 
.swiper-container-rtl .swiper-button-prev,
.swiper-container-rtl .swiper-button-next{
    fill: var(--primary-color-dark)
}

.swiper {
    width: 100%;
    height: 100%;
    
}

.swiper-slide {
text-align: center;
font-size: 18px;
background: #242424;
/* Center slide text vertically */
display: -webkit-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
-webkit-align-items: center;
align-items: center;
}
  
.swiper-slide img {
display: block;
width: 100%;
height: 100%;
object-fit: cover;
}
  
`


export default GlobalStyle