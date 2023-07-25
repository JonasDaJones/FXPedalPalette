import { StyledPedalPreview } from "./PedalGalleryItem.styled";
import PedalName from "../PedalName";
import Manufacturer from "../Manufacturer";
import Category from "../Category";
import MyComment from "../MyComment";
import Tags from "../Tags";
import PedalImage from "../PedalImage";
export default function GalleryItem({ pedal }) {
  
  return (
      <StyledPedalPreview>
     <PedalName pedalName={pedal.pedalName}/>
     <Manufacturer manufacturer={pedal.manufacturer}/>
     <Category category={pedal.category}/>
     <MyComment myComment={pedal.myComment}/>
     <PedalImage imagePath={pedal.imagePath} pedalName={pedal.pedalName} />
     <Tags tags={pedal.tags}/>
      </StyledPedalPreview>
  );
}
