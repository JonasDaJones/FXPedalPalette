import { useState } from "react";
export default function PedalDetails({ selectedPedal }) {
const [subPage, setSubPage] = useState(main);
    <h1>hello{selectedPedal.manufacturer}</h1>
// const handleButtonClick = subPage
//       const renderPedalDetailsContent = () => {
//         switch (subPage) {
//           case main:
//             return (
//               <StyledPedalDetailsSection>
//                 <h3>main</h3>
//                 <p>{selectedPedal.pedalName}</p>
//               </StyledPedalDetailsSection>
//             );
//           case specs:
//             return (
//               <StyledPedalsDetailSection>
//                 <h3>specs</h3>
//                 <p>{selectedPedal.voltage}</p>
               
//               </StyledPedalsDetailSection>
//             );
//             case sound:
//                 return (
//                   <StyledPedalsDetailSection>
//                     <h3>sound</h3>
//                    <p>{selectedPedal.soundDescription}</p>
//                   </StyledPedalsDetailSection>
//                 );
    
//           default:
//             return null;
//         }
//       };
    
//     return (
//         <>
//         <button type="button" onClick={() => handleButtonClick('main')}>main</button>
//         <button type="button" onClick={() => handleButtonClick('specs')}>specs</button>
//         <button type="button" onClick={() => handleButtonClick('sound')}>sound</button>
        
//         {renderPedalDetailsContent()}
//         </>
//     )
}