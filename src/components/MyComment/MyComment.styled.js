import styled from "styled-components";
export const StyledCommentBox = styled.div`
border: 2px solid var(--dark);
border-radius: 10px;
background-color: var(--semi-light);
grid-area: myComment;
`;

export const StyledComment = styled.cite`
padding: 0.5em;
margin: 0.3em;
color: var(--dark-font);

position: relative;
font-size: 1em;
`;

export const StyledCommentLabel = styled.p`
font-size: 0.6em;
`;
