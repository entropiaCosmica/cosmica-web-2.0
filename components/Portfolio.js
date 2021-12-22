import AirbnbCloneImg from '../public/portfolio/airbnb-clone.png'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Portfolio = () => {
  return (
    <section className="max-w-[1000px] py-[100px] mx-auto max-h-full">
      <div className="flex flex-col space-y-5 justify-center">
        <div className="flex align-bottom items-baseline w-3/4 mb-[40px]">
          <span className="text-orange-text SFMono text-md md:text-lg font-bold mr-2">03.</span>
          <h2 className="text-gray-200 text-xl md:text-2xl w-auto font-heebo font-semibold whitespace-nowrap">Some Things I&apos;ve Built</h2>
          <div className="border-t-[0.1em] border-gray-600 w-full bottom-1.5 relative ml-4" />
        </div>

        <ul className="space-y-20">
          <li className="grid grid-cols-12 relative h-full items-center">
            {/** Image */}
            <div className="h-fill flex justify-center col-span-7">
              <Image src={AirbnbCloneImg} alt='' objectFit='contain' objectPosition="left" />
            </div>

            {/** Project Info */}
            <div className="text-right space-y-5 absolute flex flex-col right-0 w-3/6 col-span-4">
              <div>
                <span className="SFMono text-orange-text text-sm">Featured Project</span>
                <h2 className="text-gray-200 text-xl md:text-xl w-auto font-heebo font-semibold whitespace-nowrap">Airbnb clone responsive UI</h2>
              </div>
              <div className="bg-light-gray-bg pr-4 pl-10 h-auto py-3 rounded-md text-gray-400">
                <p>
                  Clon de Airbnb desarrollado con React, Next JS y Tailwind CSS con calendario de reserva por fechas y mapa de geolocalización.
                </p>
              </div>
              <ul className="list-none flex justify-end space-x-3 text-gray-400 SFMono text-sm">
                <li>
                  Next js
                </li>
                <li>
                  React
                </li>
                <li>
                  Tailwind
                </li>
              </ul>
              <div className="flex justify-end w-full self-end text-gray-400 pt-4 text-xl space-x-3">
                <FiGithub className="hover:text-orange-text transition duration-400 ease-out" />
                <FiExternalLink className="hover:text-orange-text transition duration-400 ease-out" />
              </div>
            </div>
          </li>

          <li className="grid grid-cols-12 relative h-full items-center">

            {/** Project Info */}
            <div className="text-left space-y-5 absolute flex flex-col left-0 w-3/6 col-span-4 z-10">
              <div>
                <span className="SFMono text-orange-text text-sm">Featured Project</span>
                <h2 className="text-gray-200 text-xl md:text-xl w-auto font-heebo font-semibold whitespace-nowrap">Airbnb clone responsive UI</h2>
              </div>
              <div className="bg-light-gray-bg pl-4 pr-10 h-auto py-3 rounded-md text-gray-400">
                <p>
                  Clon de Airbnb desarrollado con React, Next JS y Tailwind CSS con calendario de reserva por fechas y mapa de geolocalización.
                </p>
              </div>
              <ul className="list-none flex justify-start space-x-3 text-gray-400 SFMono text-sm">
                <li>
                  Next js
                </li>
                <li>
                  React
                </li>
                <li>
                  Tailwind
                </li>
              </ul>
              <div className="flex justify-start w-full self-start text-gray-400 pt-4 text-xl space-x-3">
                <FiGithub className="hover:text-orange-text transition duration-400 ease-out" />
                <FiExternalLink className="hover:text-orange-text transition duration-400 ease-out" />
              </div>
            </div>

            {/** Image */}
            <div className="h-fill flex justify-center col-span-7 col-end-13">
              <Image src={AirbnbCloneImg} alt='' objectFit='contain' objectPosition="left" layout='' />
            </div>
          </li>

          <li className="grid grid-cols-12 relative h-full items-center">
            {/** Image */}
            <div className="h-fill flex justify-center col-span-7">
              <Image src={AirbnbCloneImg} alt='' objectFit='contain' objectPosition="left" layout='' />
            </div>

            {/** Project Info */}
            <div className="text-right space-y-5 absolute flex flex-col right-0 w-3/6 col-span-4">
              <div>
                <span className="SFMono text-orange-text text-sm">Featured Project</span>
                <h2 className="text-gray-200 text-xl md:text-xl w-auto font-heebo font-semibold whitespace-nowrap">Airbnb clone responsive UI</h2>
              </div>
              <div className="bg-light-gray-bg pr-4 pl-10 h-auto py-3 rounded-md text-gray-400">
                <p>
                  Clon de Airbnb desarrollado con React, Next JS y Tailwind CSS con calendario de reserva por fechas y mapa de geolocalización.
                </p>
              </div>
              <ul className="list-none flex justify-end space-x-3 text-gray-400 SFMono text-sm">
                <li>
                  Next js
                </li>
                <li>
                  React
                </li>
                <li>
                  Tailwind
                </li>
              </ul>
              <div className="flex justify-end w-full self-end text-gray-400 pt-4 text-xl space-x-3">
                <FiGithub className="hover:text-orange-text transition duration-400 ease-out" />
                <FiExternalLink className="hover:text-orange-text transition duration-400 ease-out" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section >
  );
};

export default Portfolio