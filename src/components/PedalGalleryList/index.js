import GalleryItem from "../PedalGalleryItem";
import { StyledGalleryList, StyledShowCase } from "./PedalGallery.styled";
export default function PedalGalleryList({ pedals }) {
return (
    <StyledGalleryList>
       
{pedals.map((pedal) => (
     <StyledShowCase key={pedal.id}>
    <GalleryItem pedal={pedal} />
    </StyledShowCase>
))}

    </StyledGalleryList>
);
}