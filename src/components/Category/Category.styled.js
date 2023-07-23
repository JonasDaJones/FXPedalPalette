import styled from "styled-components";
export const StyledCategoryWrapper = styled.ul`
  list-style: none;
  grid-area: category;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  padding: 0;
  margin-bottom: 1em;
  background-color: transparent;
  z-index: 2;
`;

export const StyledCategory = styled.li`
  justify-content: flex-end;
  height: fit-content;
  width: fit-content;
  padding: 1px 0.5em;
  margin: 0.3em 0 0 0.5em;
  border-radius: 25px;
  background-color: var(--dark-alternative);
  color: var(--light-font);
`;