import GalleryItem from "../PedalGalleryItem"; 
export default function PedalGalleryList({ pedals }) {
    const keysToDisplay = ["name", "manufacturer", "category", "myComment", "imagePath", "tags"]
return (
    <ul>
{pedals.map((pedal, index) => (
    <GalleryItem pedal={pedals[0]} keysToDisplay={keysToDisplay} />
))}
    </ul>
);
}