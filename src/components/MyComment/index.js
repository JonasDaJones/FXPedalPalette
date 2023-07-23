import { StyledComment, StyledCommentBox, StyledCommentLabel } from "./MyComment.styled";

export default function MyComment({ myComment }) {
    return (<StyledCommentBox><StyledCommentLabel>my comment</StyledCommentLabel><StyledComment>{myComment}</StyledComment></StyledCommentBox>)
};