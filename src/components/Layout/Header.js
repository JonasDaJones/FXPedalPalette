import { StyledHeader, StyledTitle } from "./Header.styled";

export default function Header({ title }) {
    return (
        <StyledHeader>
      <StyledTitle>{title}</StyledTitle>
        </StyledHeader>
    )
}