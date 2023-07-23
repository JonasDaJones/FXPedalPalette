import Link from "next/link";
export default function HomePage() {
    return (
      <div>
        <h1>FX Pedal Palette</h1>
        <Link href="/myPedals"><h2>my pedals</h2></Link>
        <Link href="/mySounds"><h2>my sounds</h2></Link>
        <Link href="/mySongs"><h2>my songs</h2></Link>
        <Link href="/myBoards"><h2>my boards</h2></Link>
        <Link href="/myWishlist"><h2>my wishlist</h2></Link>
      </div>
    );
  }