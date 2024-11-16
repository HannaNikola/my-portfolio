// 'use client'

// import { useState } from "react";
// import { Document, Page } from "react-pdf";

// export const EducationEl = () => {
//     const [showCertificate, setShowCertificate] = useState(false);

//     const handleButtonClick = () => {
//         setShowCertificate(!showCertificate);
//     }

//     return (
//         <div className="border border-customGray rounded-xl mb-28 px-3 p-7 laptop:w-[500px]">
//             <h2>Education</h2>
//             <p>IT School GoIT</p>
//             <button onClick={handleButtonClick}>View Certificate</button>
//             {showCertificate && (
//                 <div className="mt-4">
//                     <div className="mt-4">
//                         <Document file="/images/certificate.pdf">
//                             <Page pageNumber={1} />
//                             <Page pageNumber={2} />
//                             <Page pageNumber={3} />
//                         </Document>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

