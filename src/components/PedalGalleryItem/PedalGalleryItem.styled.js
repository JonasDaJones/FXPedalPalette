import styled from "styled-components";
export const StyledItem = styled.li`
border: 2px solid darkslategray;
border-radius: 5px;
margin-bottom: 2em;
5px 5px 15px 5px var(--dark);`;

export const StyledPedalPreview = styled.div`
display: grid;
grid-template-areas:
"pedalName . category"
"manufacturer . category"
"myComment myComment myComment"
"image image image"
"tags tags tags";
`;