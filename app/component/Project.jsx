import React from "react";
import Image from "next/image";
import image from '../../Public/Annotation 2024-09-18 010327.png'

const Project = () => {
    return(
        <div>
             <h2 className="bg-gradient-to-r from-primary-200 to bg-blue-400 p-2 text-center text-[#121212] text-bold rounded-md">Projects</h2>
             <div className="m-20">
                <div className="xl:flex ">
                    <Image 
                       alt="img"
                       src={image}
                       width={250}
                       height={250}
                       className="rounded-md xl:w-[500px]"
                    />
                <div className="text-center mt-2 xl:m-9">
                    <h1 className="text-white font-extrabold bg-gradient-to-r from-primary-200 to bg-blue-400 p-1 rounded-md">Magix_movies</h1>
                    <p className="text-white text-sm mt-5">This built using react, axios api call </p>
                </div>
                </div>
             </div>
        </div>
    )
}

export default Project