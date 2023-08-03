import { useRouter } from "next/router";
import PedalDetails from "@/src/components/PedalDetails";
export default function PedalDetailPage({ pedals }) {
    const router = useRouter();
    const selectedPedal = pedals.find((pedal) => pedal.id === router.query.id);

    if (!selectedPedal) {
        return <h2>pedal not found </h2>;
    }
    
console.log(selectedPedal)
    return <PedalDetails selectedPedal={selectedPedal} />
}
