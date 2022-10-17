import styled from "styled-components";

export const Logo = styled.div`

width: 100%;

`;

export const HeaderIcons = styled.div`
display:flex;
> #menuIcons {
  margin:0 2rem;
  >.badge {
    color: green;
}
}
>#menuIcons:nth-child(1){
    margin: 0 0 0 2rem;
}
`;
export const ShoppingCart = styled.span.attrs(() => ({ className: "material-symbols-outlined" }))`
  &:after {
    content: "shopping_cart";
  }
`;

export const HamburgerMenu = styled.span.attrs(() => ({ className: "material-symbols-outlined iconfill" }))`
&:after {
  content: "menu";
}
`;

export const SearchIcon = styled.span.attrs(() => ({ className: "material-symbols-outlined iconfill" }))`
&:after {
  content: "search";
}
`;

export const ArrowBack = styled.span.attrs(() => ({ className: "material-symbols-outlined" }))`
  &:after {
    content: "arrow_back";
  }
`;