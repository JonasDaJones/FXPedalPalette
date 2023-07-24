import styled from "styled-components";

export const StyledFigure = styled.figure`
grid-area: image;
align-self: center;
padding: 0;
margin: 0.5em;
width: 150px;
height: 225px;
position: relative;
`;

export const StyledFigCaption = styled.figcaption`
background-color: var(--dark-font);
color: var(--light-font);
text-align: center;
width: 100%
position: absolute;
bottom: -8px;
`;
