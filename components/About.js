import Image from "next/image"
import profile from '../public/personal-pic.png'
import { IoMdArrowDropright } from 'react-icons/io'

// import testImg from '../public/test-test.jpg'

function About() {
  return (
    <section className="max-w-[900px] py-[100px] mx-auto ">
      <div className="flex flex-col space-y-5 justify-center">
        <div className="flex align-bottom items-baseline w-3/4 ">
          <span className="text-orange-text SFMono text-md md:text-lg font-bold mr-2">01.</span>
          <h2 className="text-gray-200 text-xl md:text-2xl w-auto font-heebo font-semibold whitespace-nowrap">About Me</h2>
          <div className="border-t-[0.1em] border-gray-600 w-full bottom-1.5 relative ml-4" />
        </div>
        <div className="flex flex-col md:grid md:grid-cols-5 gap-12">
          <div className="text-gray-400 space-y-3 col-span-3 text-base md:text-lg text-left">
            <p className="">
              Quisque dapibus neque id nisl accumsan lobortis. Duis libero justo, hendrerit eget nisi vitae, dignissim efficitur erat.
              Nunc feugiat dolor ut lectus commodo, id tempor elit convallis. Duis laoreet auctor massa vitae convallis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet mattis dui, nec hendrerit sem pharetra eu. Vestibulum sed enim dictum diam aliquam aliquet. Donec varius lectus ipsum, sit amet aliquet nibh consequat quis.
            </p>
            <p>
              Aliquam ultrices commodo diam, nec finibus augue iaculis et. Duis vitae quam venenatis, tempus lacus et, consequat lorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet mattis dui, nec hendrerit sem pharetra eu. Vestibulum sed enim dictum diam aliquam aliquet. Donec varius lectus ipsum, sit amet aliquet nibh consequat quis.
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
          <div className="md:col-span-2 rounded w-64 h-64 relative self-center md:self-start">
            <Image
              className="rounded-lg z-20 "
              src={profile}
              alt="Cosmic Pixel Logo"
              layout="fill"
              // width={1000}
              objectFit="contain"
              objectPosition="top"
            />
            <div className="border-2  w-64 h-64 border-orange-border absolute z-0 top-[20px] left-[20px] rounded-lg" />
            <div className="absolute w-64 h-64 rounded-lg bg-orange-bg z-30 mix-blend-multiply backdrop-blur-0 hover:hidden"></div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default About
