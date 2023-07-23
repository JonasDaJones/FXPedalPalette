import styled from "styled-components";
export const StyledTagContainer = styled.ul`
list-style: none;
grid-area: tags;
align-self: flex-end;
background-color: transparent;
display: flex;
flex-wrap: wrap;
flex-direction: row-reverse;
align-content: flex-start;
position: relative;
bottom: 0;
width: 100%;
padding: 1em;
height: fit-content;
`;

export const StyledTag = styled.li`
width: fit-content;
padding: 2px 2px;
margin: 0.2em;
border-radius: 5px;
background-color: #bfcadb;
`;