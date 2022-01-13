import Image from "next/image"
import profile from '../public/personal-pic.png'
import { IoMdArrowDropright } from 'react-icons/io'

function About() {
  return (
    <section className="max-w-[900px] h-screen mx-auto justify-center flex flex-col" id="about">
      <div className="flex flex-col space-y-5">
        <div className="flex align-bottom items-baseline w-full">
          <span className="text-orange-text SFMono text-md md:text-lg font-bold mr-2">01.</span>
          <h2 className="text-gray-200 text-xl md:text-2xl w-auto font-heebo font-semibold whitespace-nowrap">About Me</h2>
          <div className="border-t-[0.1em] border-gray-600 w-full bottom-1.5 relative ml-4" />
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-12">
          <div className="text-gray-400 space-y-3 col-span-3 text-base text-left">
            <p className="">
              Hi! My name is Santiago, I&apos;m 23, and I enjoy creating things that live on the internet. I have dedicated the last three years of my life to taught myself software development.
            </p>
            <p>
              My interest in web development started back in 2014 when I decided to try and create a Habbo server since I didn&apos;t had enough money to buy Credits in the official game - turns out creating an Apache server taught me a lot about back-end as well as HTML & CSS for rendering my app on the client!
            </p>
            <p>
              I consider myself a highly motivated, task-driven, self-starting developer seeking to launch a career building web applications and services.
            </p>
            <p>
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 list-none list-inside text-sm md:text-base space-y-1">
              <li className="text-orange-text flex items-center space-x-2">
                <IoMdArrowDropright className="text-xs" />
                <span className="text-gray-400">
                  JavaScript (ES6+)
                </span>
              </li>
              <li className="text-orange-text flex items-center space-x-2">
                <IoMdArrowDropright className="text-xs" />
                <span className="text-gray-400">
                  TypeScript
                </span>
              </li>
              <li className="text-orange-text flex items-center space-x-2">
                <IoMdArrowDropright className="text-xs" />
                <span className="text-gray-400">
                  React
                </span>
              </li>
              <li className="text-orange-text flex items-center space-x-2">
                <IoMdArrowDropright className="text-xs" />
                <span className="text-gray-400">
                  Next.js
                </span>
              </li>
              <li className="text-orange-text flex items-center space-x-2">
                <IoMdArrowDropright className="text-xs" />
                <span className="text-gray-400">
                  Node.js
                </span>
              </li>
              <li className="text-orange-text flex items-center space-x-2">
                <IoMdArrowDropright className="text-xs" />
                <span className="text-gray-400">
                  WordPress
                </span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 rounded w-56 h-56 md:w-72 md:h-72 relative self-center lg:self-start">
            <Image
              className="rounded-lg z-20 "
              src={profile}
              alt="Cosmic Pixel Logo"
              layout="fill"
              // width={1000}
              objectFit="contain"
              objectPosition="top"
            />
            <div className="border-2 w-56 h-56 md:w-72 md:h-72 border-orange-border absolute z-0 top-[20px] left-[20px] rounded-lg" />
            {/* <div className="absolute w-64 h-64 rounded-lg bg-orange-bg z-30 mix-blend-multiply backdrop-blur-0 hover:hidden"></div> */}
          </div>
        </div>
      </div>
    </section >
  )
}

export default About
