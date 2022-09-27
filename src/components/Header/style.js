import styled from "styled-components";

// const ShoppingCart = (props) => (
//     <span className={`material-symbols-outlined iconfill ${props.className}`}> shopping_cart</span>);


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

export { ShoppingCart, HamburgerMenu, SearchIcon }