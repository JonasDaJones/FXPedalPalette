import { StyledTag, StyledTagContainer } from "./Tags.styled";

export default function Tags({ tags }) {
const tagArray = Array.isArray(tags) ? tags : [tags];
return (
<StyledTagContainer>
{tagArray.map((tag) => (
  <StyledTag key={tag}>{tag}</StyledTag>
))}
</StyledTagContainer>
)
}