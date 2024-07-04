
'use client'

import { useState } from "react"
import Image from "next/image"


export const EducationEl = () => {
    const [showCertificate, setShowCertificate] = useState(false);

    const handleButtonClick = () => {
        setShowCertificate(!showCertificate);
    }
    
    return (
        <div className="border border-customGray   rounded-xl  mb-28 px-3 p-7 laptop:w-[500px]">
            <h2>Education</h2>
            <p>IT School GoIT</p>
            <button onClick={handleButtonClick}>View Certificate</button>
            {showCertificate && (
                <div>
                   
                </div>
            )}
        </div>
    )
}