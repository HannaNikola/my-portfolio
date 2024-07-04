import Image from "next/image"
import { LinkPortfolio } from './linkPortfolio';
import SvgAvatar from '../../../public/images/Group 39.svg';
import { ButtonLoadCV } from './buttonCV';
import { SkillList } from './skillsList';
import { SocialLink } from './socialLink';
import { LuPhone } from "react-icons/lu";
// import { EducationEl } from './educationEl'


export const Main = () => {



    return (
        
            <div>
            <div >
                <div className="flex flex-col laptop:flex-row justify-between items-center mt-20 laptop:mt-64  mb-20">
                    <div className="flex justify-center mb-10 laptop:mb-0 laptop:w-[390px] laptop:ml-[-20px] order-1 laptop:order-2">
                            <div className=" relative w-48 h-48 laptop:w-[390px] laptop:h-[390px]">
                                <Image
                                    src={SvgAvatar}
                                    alt="Profile Picture"
                                    sizes="390px , 390px"
                                    fill
                                    priority
                                    
                                />
                            </div>
                    </div>
                    <div className="text-center laptop:text-left laptop:mr-10 laptop:w-[662px] order-2 laptop:order-1">
                        <h1 className="mb-6 tablet:mb-7 text-customTextAccent text-h1 laptop:text-7xl">Hi, I m Hanna</h1>
                        <p className="mb-24 laptop:text-2xl">
                            I am a young <span className="text-customTextAccent laptop:text-2xl ">Full Stack Developer</span> and I am deeply passionate about development and creating new, user-friendly, and useful applications.
                            I love solving new challenges and always seek opportunities to improve my skills.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <LinkPortfolio />
            </div>
            <div className="flex justify-center" >
                <ButtonLoadCV />
            </div>
            <div className="flex justify-center mb-24 laptop:mb-56" >
                <a className="flex items-center  laptop:text-2xl " href="tel:+32492326638"><LuPhone className="mr-1 " />+32 492 32 66 38</a>
            </div>
            
            <p className="text-h2 text-center laptop:text-6xl mb-24 laptop:mb-36">These are the technologies that I’ve been using</p>
            <SkillList />
            {/* <div>
                <EducationEl />
            </div> */}
            <div className="mb-24">
                <SocialLink  />
            </div>
            
        </div>
    )


}