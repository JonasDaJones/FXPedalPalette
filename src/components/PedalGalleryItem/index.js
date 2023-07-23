export default function GalleryItem({ pedal, keysToDisplay }) {
  const pedalPreview = Object.entries(pedal).filter(([key, value]) => keysToDisplay.includes(key));

  return (
    <li>
      <div>
        {pedalPreview.map(([key, value]) => (
          <p key={key}>{`${key}: ${value}`}</p>
        ))}
      </div>
    </li>
  );
}
