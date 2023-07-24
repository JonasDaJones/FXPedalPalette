import styled from "styled-components";

export const StyledPedalPreview = styled.div`
border: 1px solid hotpink;
width: 100%;
display: grid;
grid-template-areas:
"pedalName . category"
"manufacturer . category"
"myComment myComment myComment"
"image image image"
"tags tags tags";
`;