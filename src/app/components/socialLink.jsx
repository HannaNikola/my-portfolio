import { PiLinkedinLogoLight } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";



export const SocialLink = () => {
    return (
      <div className="border  border-backgroundSecondary rounded-full p-4 flex items-center justify-between  bg-backgroundSecondary ">
     
        <h3 className="text-left text-textSecondaryColor">Follow me</h3>
        
        <ul className=" flex space-x-4">
          <li>
            
              <a
                href="https://www.linkedin.com/in/hanna-nikolaienko/"
                target="_blank"
                rel="noopener noreferrer"
               
              >
              <PiLinkedinLogoLight className=" fill-violet-300 w-6 h-6 cursor-pointer active-link " />
              </a>
           
          </li>
          <li className=" ">
            
              <a
                href="https://github.com/HannaNikola"
                target="_blank"
                rel="noopener noreferrer"
               
              >
              <FaGithub className=" fill-violet-300 w-6 h-6 cursor-pointer active-link " />
              </a>
            
          </li>
          <li className=" ">
           
              <a
                href="mailto:h.nikolaienko32@gmail.com"
                
              >
              <MdOutlineEmail className=" fill-violet-300 w-6 h-6 cursor-pointer active-link " /> 
              </a>
            
          </li>
        </ul>
      </div>
    );
}