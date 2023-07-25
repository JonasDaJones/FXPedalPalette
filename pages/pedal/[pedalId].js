import { useRouter } from "next/router";
export default function PedalDetailPage({ pedals }) {
    const router = useRouter();
    const selectedPedal = pedals.find((pedal) => pedal.id == router.query.pedalId)
    return <PedalDetails selectedPedal={selectedPedal} />
}
