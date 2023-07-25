import Image from "next/image";
import { StyledFigCaption, StyledFigure } from "./PedalImage.styled";
export default function PedalImage({ imagePath }) {
    return (
        <StyledFigure>
        <Image
        src={imagePath}
        alt="pedalName"
        width="150"
        height="225"
    />
    <StyledFigCaption>click for details</StyledFigCaption>
    </StyledFigure>
    )
}