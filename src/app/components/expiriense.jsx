import Image from "next/image"
import scive from '../../../public/images/scive.png'

export const Experience = ()=>{


    return(
        <div className='border border-customGray   rounded-xl  mb-28 px-3 p-7 '>
            <h2 className="text-h3 text-center laptop:text-6xl mb-24 laptop:mb-36">My work experience</h2>
            <div className="flex flex-row items-center mb-4">
            <Image
            className='mb-3 flex mr-4'
            src={scive}
            alt="company logo"
            width={50}
            height={50}
            />
            <p className="flex  text-nunito-second  mb-2 laptop:text-2xl "> SciveFlow <span className="text-nunito ml-2">London</span></p>
            </div>
           
            <p className="flex   text-nunito-second  mb-2  laptop:text-2xl" >Frontend Developer</p>
            <p className="flex   text-nunito  mb-2">from July 2024 to March 2025</p>
            <p className="flex   text-nunito  mb-2">What we do: We are developing an AI-Powered Email App</p>
            <p className="flex   text-nunito  mb-2">Website company:<a href="https://scive.ai/" target="_blank" rel='noopener noreferrer' className='text-customTextAccent underline ml-2'> Folow</a></p>
            
        </div>
    )

    
}