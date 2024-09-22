'use client'

import React from "react";
import Image from "next/image";
import Magix_movies from '../../Public/Screenshot 2024-04-20 222824.png'
import Lotus_Music from '../../Public/lotus.png'
import Book_Hub from '../../Public/Screenshot 2024-05-16 182920.png'
import Getstall from '../../Public/Screenshot getsall.png'
import Link from "next/link";

const Project = () => {
    return(
        <div id="project">
             <h2 className="bg-gradient-to-r from-primary-200 to bg-blue-400 p-2 text-center text-[#121212] text-bold rounded-md">Projects</h2>
            
             <div className="m-5">
                <div className="xl:flex mt-10">
                <Link href='https://magix-movies.onrender.com'>
                    <Image 
                       alt="img"
                       src={Magix_movies}
                       width={250}
                       height={250}
                       className="rounded-md xl:w-[500px]"
                    />
                 </Link>
                <div className="text-center mt-2 xl:m-9">
                    <h1 className="text-white font-extrabold bg-gradient-to-r from-primary-200 to bg-blue-400 p-1 rounded-md">Magix movies</h1>
                    <p className="text-white text-sm mt-5">This is built using react, axios api call to display the latest movie series, upcoming movies and trailers</p>
                </div>
                </div>
             </div>

             <div className="m-5">
                <div className="xl:flex mt-10">
                <Link href='https://lotus-music-1.onrender.com/'>
                    <Image 
                       alt="img"
                       src={Lotus_Music}
                       width={250}
                       height={250}
                       className="rounded-md xl:w-[500px]"
                    />
                </Link>
                <div className="text-center mt-2 xl:m-9">
                    <h1 className="text-white font-extrabold bg-gradient-to-r from-primary-200 to bg-blue-400 p-1 rounded-md">LotusMusic</h1>
                    <p className="text-white text-sm mt-5">This built using react,which shows slides of displayed Gospel music and the use of node and express for the backend </p>
                </div>
                </div>
             </div>

             <div className="m-5">
                <div className="xl:flex mt-10">
                <Link href='https://book-hub-5u1f.onrender.com'>
                    <Image 
                       alt="img"
                       src={Book_Hub}
                       width={250}
                       height={250}
                       className="rounded-md xl:w-[500px]"
                    />
                </Link>
                <div className="text-center mt-2 xl:m-9">
                    <h1 className="text-white font-extrabold bg-gradient-to-r from-primary-200 to bg-blue-400 p-1 rounded-md">Book Hub</h1>
                    <p className="text-white text-sm mt-5">This built using react, axios api call to search for details of books worlwide</p>
                </div>
                </div>
             </div>

             <div className="m-5">
                <div className="xl:flex mt-10">
                <Link href='https://gestalll.onrender.com'>
                    <Image 
                       alt="img"
                       src={Getstall}
                       width={250}
                       height={250}
                       className="rounded-md xl:w-[500px] "
                    />
                </Link>
                <div className="text-center mt-2 xl:m-9">
                    <h1 className="text-white font-extrabold bg-gradient-to-r from-primary-200 to bg-blue-400 p-1 rounded-md">Getstall</h1>
                    <p className="text-white text-sm mt-5">This built using react, user interface of of a website</p>
                </div>
                </div>
             </div>
        </div>
    )
}

export default Project