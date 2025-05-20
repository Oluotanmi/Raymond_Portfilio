'use client'

import React from "react";
import Image from "next/image";
// import Github from '@/Public/github.png'
import Magix_movies from '../../Public/Screenshot 2024-04-20 222824.png'
import Lotus_Music from '../../Public/lotus.png'
import Book_Hub from '../../Public/Screenshot 2024-05-16 182920.png'
import Getstall from '../../Public/Screenshot getsall.png'
import talent from '../../Public/Screenshot 2025-04-08 164835.png'
import cend from '../../public/cendclothing.png'
import Link from "next/link";
import Github from '../../Public/github.png' 

const Project = () => {
    return(
        <div id="project">
             <h2 className=" text-center text-white text-bold rounded-md">Projects</h2>

             <div className="justify-center text-center">
             <div className="xl:flex mt-10 justify-around">
                <div className="flex">
                    <Link href='https://cendclothing.com'>
                        <Image 
                        alt="img"
                        src={cend}
                        width={250}
                        height={250}
                        className="rounded-md xl:w-[1500px]"
                        />
                    </Link>

                    <a href='cendclothing.com'>
                    <Image 
                        alt="img"
                        src={Github}
                        width={250}
                        height={250}
                        className="rounded-md m-10  xl:w-10 bg-white"
                        />
                    </a>
                </div>
                <div className="text-right mt-2 xl:m-9">                   
                    <h1 className="text-white font-extrabold bg-gradient-to-r from-primary-200 to bg-blue-400 p-1 rounded-md">CendClothing</h1>
                    <p className="text-white text-sm mt-5">
                        CendClothing is a modern e-commerce website focused on showcasing stylish, trend-forward apparel. 
                        It was designed with a clean user interface, intuitive navigation, and a mobile-first approach to
                         ensure a smooth shopping experience for users across all devices.
                    </p>
                </div>
                </div>

                <div className="xl:flex mt-10 justify-around">
                <div className="flex">
                    <Link href='https://talentpoolresourcesinternational.com'>
                        <Image 
                        alt="img"
                        src={talent}
                        width={250}
                        height={250}
                        className="rounded-md xl:w-[1500px]"
                        />
                    </Link>

                    <a href='https://talentpoolresourcesinternational.com'>
                    <Image 
                        alt="img"
                        src={Github}
                        width={250}
                        height={250}
                        className="rounded-md m-10  xl:w-10 bg-white"
                        />
                    </a>
                </div>
                <div className="text-right mt-2 xl:m-9">                   
                    <h1 className="text-white font-extrabold bg-gradient-to-r from-primary-200 to bg-blue-400 p-1 rounded-md">Talentpool</h1>
                    <p className="text-white text-sm mt-5">
                        Talent Pool Resources International is a recruitment and talent management platform aimed at connecting
                         employers with top-tier professionals 
                        across industries. I was responsible for the 
                        full design and development of the website, ensuring it was both visually appealing and functionally robust.
                    </p>
                </div>
                </div>
             </div>
            
             <div className="justify-center text-center">
                <div className="xl:flex mt-10">
                <div className="flex">
                    <Link href='https://magix-movies.onrender.com'>
                        <Image 
                        alt="img"
                        src={Magix_movies}
                        width={250}
                        height={250}
                        className="rounded-md xl:w-[1300px]"
                        />
                    </Link>

                    <a href='https://github.com/Oluotanmi/magix-movies.git'>
                    <Image 
                        alt="img"
                        src={Github}
                        width={250}
                        height={250}
                        className="rounded-md m-10  w-10 bg-white"
                        />
                    </a>
                </div>
                <div className="text-right mt-2 xl:m-9">                   
                    <h1 className="text-white font-extrabold bg-gradient-to-r from-primary-200 to bg-blue-400 p-1 rounded-md">Magix movies</h1>
                    <p className="text-white text-sm mt-5">
                        Magix Movies is a responsive web application that allows users to browse and search for movies using 
                        real-time data from a movie API. The platform is designed to provide an engaging and user-friendly
                        experience for discovering popular, top-rated, and trending films.
                    </p>
                </div>
                </div>
             </div>

             <div className="m-5">
                <div className="xl:flex mt-10">
                <div className="flex">
                    <Link href='https://lotus-music-1.onrender.com/'>
                        <Image 
                        alt="img"
                        src={Lotus_Music}
                        width={250}
                        height={250}
                        className="rounded-md xl:w-[1300px] sm:w-[600px]"
                        />
                    </Link>

                    <a href='https://github.com/Oluotanmi/Lotus_Music.git'>
                        <Image 
                            alt="img"
                            src={Github}
                            width={250}
                            height={250}
                            className="rounded-md m-10  w-10 bg-white"
                            />
                    </a>
                </div>
                <div className="text-right mt-2 xl:m-9">
                    <h1 className="text-white font-extrabold bg-gradient-to-r from-primary-200 to bg-blue-400 p-1 rounded-md">LotusMusic</h1>
                    <p className="text-white text-sm mt-5">
                        Lotus Music is a modern, music-streaming web application that allows users to explore and enjoy a collection 
                        of songs. It features clean UI design, interactive playback controls, and smooth user experience for
                        browsing and playing music directly from the browser.
                    </p>
                </div>
                </div>
             </div>

             <div className="m-5">
                <div className="xl:flex mt-10">
                <div className="flex">
                    <Link href='https://book-hub-5u1f.onrender.com'>
                        <Image 
                        alt="img"
                        src={Book_Hub}
                        width={250}
                        height={250}
                        className="rounded-md xl:w-[1300px]"
                        />
                    </Link>

                    <a href='https://github.com/Oluotanmi/Book-Hub.git'>
                            <Image 
                                alt="img"
                                src={Github}
                                width={250}
                                height={250}
                                className="rounded-md m-10  w-10 bg-white"
                                />
                        </a>
                    </div>
                <div className="text-right mt-2 xl:m-9">
                    <h1 className="text-white font-extrabold bg-gradient-to-r from-primary-200 to bg-blue-400 p-1 rounded-md">Book Hub</h1>
                    <p className="text-white text-sm mt-5">
                           Book Hub is a responsive web application that allows users to explore a curated library of 
                           books, browse by categories, and view detailed information about each title. The goal was to create a smooth 
                           and engaging experience for book lovers, with clean UI and seamless navigation.
                    </p>
                </div>
                </div>
             </div>

             <div className="m-5">
                <div className="xl:flex mt-10">
                <div className="flex">
                    <Link href='https://gestalll.onrender.com'>
                        <Image 
                        alt="img"
                        src={Getstall}
                        width={250}
                        height={250}
                        className="rounded-md xl:w-[400px] "
                        />
                    </Link>
                    <a href='https://github.com/Oluotanmi/Gestalll.git'>
                            <Image 
                                alt="img"
                                src={Github}
                                width={250}
                                height={250}
                                className="rounded-md m-10  w-10 bg-white"
                                />
                     </a>
                </div>
                <div className="text-right mt-2 xl:m-9">
                    <h1 className="text-white font-extrabold bg-gradient-to-r from-primary-200 to bg-blue-400 p-1 rounded-md">Getstall</h1>
                    <p className="text-white text-sm mt-5">This built using react, user interface of of a website</p>
                </div>
                </div>
             </div>
        </div>
    )
}

export default Project