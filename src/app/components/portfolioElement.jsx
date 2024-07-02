import Image from 'next/image';
import projects from '../data/projects';
import TestyFood from '../../../public/images/tasty-treats.jpg';
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';
import { ButtonLoadCV } from './buttonCV';
import { SocialLink } from './socialLink';

export const PortfolioElement = () => {
    return (
        <div>
            <div className="flex justify-between items-center mt-3 mb-32">
                <div className="">
                    <button>
                        <Link className="flex items-center" href="/">
                            <IoChevronBackOutline className="w-5 h-5" />
                            Back
                        </Link>
                    </button>
                </div>
                <div className="w-60"><SocialLink /></div>
                
            </div>

            <h2 className="flex text-center text-nunito-second   mb-20">
                &lt; This is where you can get to know me a little more and see the projects in which I
                participated /&gt;
            </h2>
            <div className="flex justify-center">
                <ButtonLoadCV />
            </div>

            <div>
                <ul>
                    {projects.map((project) => (
                        <li key={project.id} className="list-none mb-10 custom-card">
                            <h2 className="mb-2.5 text-customTextAccent text-secondary ">
                                {project.title}
                            </h2>

                            <Image
                                className="mb-2.5 border rounded"
                                src={TestyFood}
                                alt="portfolio Picture"
                                width="150"
                                height="150"
                                priority
                                style={{ objectFit: 'cover' }}
                            />
                            <a
                                className="underline decoration-1 text-customTextAccent text-accent"
                                href={project.githubUrl}
                            >
                                Follow
                            </a>
                            <div className="w-full">
                                <p className="mb-2.5">{project.description}</p>
                                <a
                                    className="text-customTextAccent underline decoration-1 text-accent"
                                    href={project.repository}
                                >
                                    Repository
                                </a>
                                {project.backendRepository && (
                                    <>
                                        <br />
                                        <a
                                            className="underline decoration-1 text-customTextAccent mb-1.5 text-accent"
                                            href={project.backendRepository}
                                        >
                                            Backend Repository
                                        </a>
                                    </>
                                )}
                                {project.swagger && (
                                    <>
                                        <br />
                                        <a
                                            className="mb-1.5  underline decoration-1 text-customTextAccent text-accent"
                                            href={project.swagger}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Swagger Documentation
                                        </a>
                                    </>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
