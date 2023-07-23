import { StyledCategory, StyledCategoryWrapper } from "./Category.styled";

export default function Category({ category }) {
    const categories =
    category && Array.isArray(category) ? category : [];
    return (
        <StyledCategoryWrapper>
        {categories.map((category) => (
          <StyledCategory key={category}>{category}</StyledCategory>
        ))}
      </StyledCategoryWrapper>
    );
}