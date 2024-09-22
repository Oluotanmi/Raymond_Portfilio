'use client'

import React,{useState} from "react"
import Image from "next/image"
import image from '@/Public/IMG-20230410-WA0024.jpg'
import TabButton from './TabButton'
import { useTransition } from "react"

const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
               <li>Node.js</li>
               <li>Express</li>
               <li>React.js</li>
               <li>Next.js</li>
               <li>Tailwind</li>
               <li>TypeScript</li>
               <li>HTML</li>
               <li>CSS</li>
               <li>Javascript</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
               <li>Olabisi Onabanjo University</li>
               <li>Bsc and BEd in Economics</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className="list-disc pl-2">
               <li>OOU Sub-Community Manager </li>
            </ul>
        )
    }
]

const AboutSection = () => {

  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition()

  const handleTabChange =(id) => {
    isPending()
    startTransition(() =>{
      setTab(id);
    })
  }

    return(
     <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
            <Image 
               alt="img"
               src={image}
               width={500}
               height={500}
               className="rounded-xl"
            />
            <div className="mt-4  md:mt-0 text-left flex flex-col h-full">
                <h2 className="bg-gradient-to-r from-primary-200 to bg-blue-400 p-2 text-center text-[#121212] text-bold rounded-md">About</h2>
                <p className="text-base lg:text-lg mt-5">
                    I am a front-end web developer with a passion for creating interactive and responsive web application, 
                    I have experience working with Javascript, React, Redux, Node.js, Express, PostgreSQL, sequelize, HTML, CSS and Git. 
                    I am a quick learner and i am always looking to expand my knowledge and skill set.
                     i am team player and i am excited to work wiith others to create amazing apllication 
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton 
                       selectTab={() => handleTabChange("skills") }
                       active={tab === "skills"}
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton 
                       selectTab={() => handleTabChange("education") }
                       active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton 
                       selectTab={() => handleTabChange("certification") }
                       active={tab === "certification"}
                    >
                        {" "}
                        Certifications{" "}
                    </TabButton>
                </div>
                <div className="mt-8" >
                    {TAB_DATA.find( (t) => t.id === tab).content}
                </div>
            </div>
        </div>
     </section>
    )
}

export default AboutSection;