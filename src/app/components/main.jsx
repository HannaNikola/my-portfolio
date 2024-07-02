import Image from "next/image"
import { LinkPortfolio } from "./linkPortfolio";
import SvgAvatar from '../../../public/images/Group 39.svg';
import { ButtonLoadCV } from './buttonCV';
import { SkillList } from './skillsList';
import { SocialLink } from './socialLink';
import { LuPhone } from "react-icons/lu";



export const Main = () => {



    return (
        <div >
            <div className=" flex justify-center mt-20  mb-20" >
                <Image
                    src={SvgAvatar}
                    alt="Profile Picture"
                    width='200'
                    height='200'
                    priority
                />

            </div>
            <h1 className="text-center mb-6 text-customTextAccent text-h1 ">Hi, I`m Hanna</h1>
            <p className="mb-24">I am a young <span className="text-customTextAccent">Full Stack Developer </span>and I am deeply passionate about development and creating new, user-friendly, and useful applications.
                I love solving new challenges and always seek opportunities to improve my skills.</p>
           

            <div className="flex justify-center">
                <LinkPortfolio />
            </div>
            <div className="flex justify-center" >
                <ButtonLoadCV />
            </div>
            <div className="flex justify-center mb-24" >
                <a className="flex items-center " href="tel:+32492326638"><LuPhone className="mr-1 " />+32 492 32 66 38</a>
            </div>
            
            <p className="text-h2 text-center  mb-24">These are the technologies that I’ve been using</p>
            <SkillList />
            <div className="mb-24">
                <SocialLink  />
            </div>
            
        </div>
    )


}