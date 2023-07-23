import PedalGalleryList from "@/src/components/PedalGalleryList";
import { pedals } from "@/src/lib/pedalfx-data";
export default function myPedals() {
return (
<>
<h1>my pedals</h1>
<PedalGalleryList pedals={pedals} />
</>)
}