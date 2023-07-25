import PedalGalleryList from "@/src/components/PedalGalleryList";
import { pedals } from "@/src/lib/pedalfx-data";
import  Header  from "@/src/components/Layout/Header";

export default function myPedals() {

return (
<>
<Header title="my pedals" />
<PedalGalleryList pedals={pedals} />
</>)
}


