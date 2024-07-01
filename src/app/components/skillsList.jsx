import { SiSwagger } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";




export const SkillList = () => {

    return (
        <div className="border border-customGray   rounded-xl  mb-28 px-3 p-7">
            <h2 className=" text-center text-nunito mb-3.5">TECH SKILLS</h2>
            <ul className=" ml-4 ">
                <li className="flex items-center mb-3.5 "><div className="icons-border"><IoLogoJavascript className="w-5 h-5  fill-yellow-400" /></div>Javascript</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><FaReact className="w-5 h-5 fill-cyan-400" /></div>React</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><SiRedux className="w-5 h-5 fill-violet-500" /></div>Redux</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><FaNodeJs className="w-5 h-5 fill-green-600" /></div>Node.Js</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><SiNextdotjs className="w-5 h-5 fill-slate-50" /></div>Next.JS</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><SiTypescript className="w-5 h-5 fill-sky-600" /></div>Type Script</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><FaHtml5 className="w-5 h-5 fill-orange-400" /></div>HTML5</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><FaSass className="w-5 h-5 fill-pink-500" /></div>SASS</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><TbApi className="w-5 h-5 fill-cyan-400" /></div>REST API</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><SiSwagger className="w-5 h-5 fill-green-500" /></div>Swagger</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><SiPostman className="w-5 h-5 fill-orange-400" /></div>Postman</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><SiWebpack className="w-5 h-5 fill-cyan-400" /></div>Webpack</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><BiLogoMongodb className="w-5 h-5 fill-green-500" /></div>MongoDB</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><FaGithub className="w-5 h-5 fill-slate-50" /></div>GIT</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><SiTailwindcss className="w-5 h-5 fill-sky-600" /></div>Tailwind</li>
                <li className="flex items-center mb-3.5"><div className="icons-border"><DiResponsive className="w-5 h-5 fill-yellow-400" /></div>Responsive/Adaptive design</li>

            </ul>
        </div>
    )
}