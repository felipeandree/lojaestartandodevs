import styled from "styled-components";

const Logo = styled.img`

width: 100%;

`
const HeaderIcons = styled.div`
display:flex;
> #menuIcons {
  margin:0 2rem;
}
>#menuIcons:nth-child(1){
    margin: 0 0 0 2rem;
}

`
const ShoppingCart = styled.span.attrs(() => ({ className: "material-symbols-outlined" }))`
  &:after {
    content: "shopping_cart";
  }
`;

const HamburgerMenu = styled.span.attrs(() => ({ className: "material-symbols-outlined iconfill" }))`
&:after {
  content: "menu";
}
`;

const SearchIcon = styled.span.attrs(() => ({ className: "material-symbols-outlined iconfill" }))`
&:after {
  content: "search";
}
`;

const ArrowBack = styled.span.attrs(() => ({ className: "material-symbols-outlined" }))`
  &:after {
    content: "arrow_back";
  }
`;

export { ShoppingCart, HamburgerMenu, SearchIcon, Logo, ArrowBack, HeaderIcons }