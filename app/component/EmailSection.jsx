'use client'

import Link from "next/link"
import Github from '@/Public/github.png'
import linkedin from '@/Public/linkedin-logo.png' 
import Image from "next/image"


const EmailSection = () => {

    

    return(
      <section 
         id="contact"
         className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      >
        <div className="bg-[radial-gradient(ellipse_at-center,_var(--tw-gradient-stops))] from bg-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 transform -translate-x-1/2 -translate-1/2">
       </div>
       <div className="z-10 ">
          <h5 className="text-xl font-bold text-white my-2">
            let&apos;s connect
          </h5>
          <p className="text-[#ADB7BE] text-[14px] xl:text-md">
             I&apos;m currently looking for new opportunities, my inbox is always open.
             Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you 
          </p>
          <div className="flex">
            <div className="bg-white p-2 w-[40px] rounded-full mt-2">
              <Link href='/' >
                <Image 
                    alt="img"
                    src={Github}
                    className="w-8"
                />
              </Link>
            </div>
            <div className="bg-white p-2 w-[40px] rounded-full mt-2">
              <Link href='/' >
                <Image 
                    alt="img"
                    src={linkedin}
                    className="w-8"
                />
              </Link>
            </div>
          </div>
          <div>
            <form className="flex flex-col">
             <div className="mt-3"> 
                <label className="text-white block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input 
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191e] border border-[#33353f] placeholder-[#9CA2A9]  text-gray-100 text-100 text-sm rounded-lg w-full p-2.5"
                  placeholder="oluwabukunmioluotanmi@gmail.com"
                />
                <label className="text-white block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input 
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191e] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-100 text-sm rounded-lg w-full p-2.5"
                  placeholder="just saying hi"
                />
                <label className="text-white block mb-2 text-sm font-medium">
                  Message
                </label>
                <input 
                  name="Message"
                  type="text"
                  id="message"
                  required
                  className="bg-[#18191e] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-100 text-sm rounded-lg w-full p-2.5"
                  placeholder="lets talk about...."
                />
                <button className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 rounded-lg w-full mt-4">
                  Send Message
                </button>
            </div>
           </form>
        </div>
       </div>
      </section>     
    )
}

export default EmailSection;