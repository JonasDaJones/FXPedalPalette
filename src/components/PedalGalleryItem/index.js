import { StyledItem, StyledPedalPreview } from "./PedalGalleryItem.styled";
import PedalName from "../PedalName";
import Manufacturer from "../Manufacturer";
import Category from "../Category";
import MyComment from "../MyComment";
import Tags from "../Tags";
export default function GalleryItem({ pedal }) {
  
  return (
    <StyledItem>
      <StyledPedalPreview>
     <PedalName pedalName={pedal.pedalName}/>
     <Manufacturer manufacturer={pedal.manufacturer}/>
     <Category category={pedal.category}/>
     <MyComment myComment={pedal.myComment}/>
     <Tags tags={pedal.tags}/>
      </StyledPedalPreview>
    </StyledItem>
  );
}
