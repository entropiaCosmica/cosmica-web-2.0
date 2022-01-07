import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'
import useWidth from '../hooks/useWidth'

import AirbnbCloneImg from '../public/portfolio/airbnb-clone.png'
import ondigitalImg from '../public/portfolio/ondigital.png'
import spotify2Img from '../public/portfolio/spotify2.png'

import AirbnbCloneImgNormal from '../public/portfolio/airbnb-clone-normal.png'
import ondigitalImgNormal from '../public/portfolio/ondigital-normal.png'
import spotify2ImgNormal from '../public/portfolio/spotify-clone-normal.png'

const Portfolio = () => {
  const getWidth = useWidth()

  if (getWidth <= 768) {
    return (
      <section className="max-w-[1000px] py-[100px] mx-auto max-h-full" id="portfolio" >
        <div className="flex flex-col space-y-5 justify-center">
          <div className="flex align-bottom items-baseline w-full mb-[20px]">
            <span className="text-orange-text SFMono text-md md:text-lg font-bold mr-2">03.</span>
            <h2 className="text-gray-200 text-xl md:text-2xl w-auto font-heebo font-semibold whitespace-nowrap">Some Things I&apos;ve Built</h2>
            <div className="border-t-[0.1em] border-gray-600 w-full bottom-1.5 relative ml-4" />
          </div>
          <ul className="space-y-14 ">
            <li className="shadow-md relative ">
              <div className={`flex justify-left h-96 relative`}>
                <Image
                  alt=''
                  className="rounded-md"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                  src={AirbnbCloneImg}
                />
                <div className="absolute place-self-center flex flex-col max-w-full px-8">
                  <span className="SFMono text-orange-text text-sm">Featured Project</span>
                  <h2 className="text-gray-200 text-xl md:text-xl w-auto font-heebo font-semibold pt-2">Airbnb clone responsive UI</h2>
                  <div className="h-auto py-6 text-gray-400">
                    <p>
                      Clon de Airbnb desarrollado con React, Next JS y Tailwind CSS con calendario de reserva por fechas y mapa de geolocalización.
                    </p>
                  </div>
                  <ul className="list-none flex justify-start space-x-5 text-gray-400 SFMono text-sm">
                    <li>
                      Next js
                    </li>
                    <li>
                      React
                    </li>
                    <li>
                      Tailwind
                    </li>
                    <li>
                      Mapbox
                    </li>
                  </ul>
                  <div className="flex justify-start w-full self-end text-gray-400 pt-5 text-xl space-x-3">
                    <div>
                      <a href="https://github.com/entropiaCosmica/airbnb-clone" target="_blank" rel="noopener noreferrer">
                        <FiGithub className="hover:text-orange-text transition duration-400 ease-out" />
                      </a>
                    </div>
                    <div>
                      <a href="https://airbnb-clone-weld-eta.vercel.app" target="_blank" rel="noopener noreferrer">
                        <FiExternalLink className="hover:text-orange-text transition duration-400 ease-out" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="shadow-md relative ">
              <div className={`flex justify-left h-96 relative`}>
                <Image
                  alt=''
                  className="rounded-md"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                  src={ondigitalImg}
                />
                <div className="absolute place-self-center flex flex-col max-w-full px-8">
                  <span className="SFMono text-orange-text text-sm">Featured Project</span>
                  <h2 className="text-gray-200 text-xl md:text-xl w-auto font-heebo font-semibold pt-2">OnDigital Pro</h2>
                  <div className="h-auto py-6 text-gray-400">
                    <p>
                      Sitio web en Wordpress para grupo de asesores de inversiones en mercados forex, crypto, acciones e indíces bursátiles.
                    </p>
                  </div>
                  <ul className="list-none flex space-x-5 justify-start text-gray-400 SFMono text-sm">
                    <li>
                      PHP
                    </li>
                    <li>
                      Wordpress
                    </li>
                    <li>
                      Elementor
                    </li>
                  </ul>
                  <div className="flex justify-start w-full self-end text-gray-400 pt-5 text-xl space-x-3">
                    {/* <div>
                      <a href="https://github.com/entropiaCosmica/airbnb-clone" target="_blank" rel="noopener noreferrer">
                        <FiGithub className="hover:text-orange-text transition duration-400 ease-out" />
                      </a>
                    </div> */}
                    <div>
                      <a href="https://www.cosmica.dev/ondigital/index.php/home/" target="_blank" rel="noopener noreferrer">
                        <FiExternalLink className="hover:text-orange-text transition duration-400 ease-out" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="shadow-md relative ">
              <div className={`flex justify-left h-96 relative`}>
                <Image
                  alt=''
                  className="rounded-md"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                  src={spotify2Img}
                />
                <div className="absolute place-self-center flex flex-col max-w-full px-8">
                  <span className="SFMono text-orange-text text-sm">Featured Project</span>
                  <h2 className="text-gray-200 text-xl md:text-xl w-auto font-heebo font-semibold pt-2">Spotify Clone</h2>
                  <div className="h-auto py-6 text-gray-400">
                    <p>
                      Web app responsive desarrollada con la API oficial de Spotify, Next JS y Tailwind CSS, para visualizar la lista de playlists del usuario, canciones y reproductor funcional para reproducir/pausar y cambiar de canción.
                    </p>
                  </div>
                  <ul className="list-none flex justify-start space-x-5 text-gray-400 SFMono text-sm">
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
                  <div className="flex justify-start w-full self-end text-gray-400 pt-5 text-xl space-x-3">
                    <div>
                      <a href="https://github.com/entropiaCosmica/spotify-clone" target="_blank" rel="noopener noreferrer">
                        <FiGithub className="hover:text-orange-text transition duration-400 ease-out" />
                      </a>
                    </div>
                    <div>
                      <a href="https://spotify-clone-henna.vercel.app/login" target="_blank" rel="noopener noreferrer">
                        <FiExternalLink className="hover:text-orange-text transition duration-400 ease-out" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </section >
    )
  }

  return (
    <section className="max-w-[1000px] py-[100px] mx-auto max-h-full" id="portfolio">
      <div className="flex flex-col space-y-5 justify-center">
        <div className="flex align-bottom items-baseline w-full mb-[40px]">
          <span className="text-orange-text SFMono text-md md:text-lg font-bold mr-2">03.</span>
          <h2 className="text-gray-200 text-xl md:text-2xl w-auto font-heebo font-semibold whitespace-nowrap">Some Things I&apos;ve Built</h2>
          <div className="border-t-[0.1em] border-gray-600 w-full bottom-1.5 relative ml-4" />
        </div>

        <ul className="space-y-20">
          <li className="grid grid-cols-12 relative h-full items-center">
            {/** Image */}
            <div className="h-full flex justify-center col-span-7">
              <Image
                className="rounded-md"
                src={AirbnbCloneImgNormal}
                alt=''
                objectFit='contain'
                objectPosition="left"
                priority="normal"
              />
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
              <div>
                <a href="https://github.com/entropiaCosmica/airbnb-clone" target="_blank" rel="noopener noreferrer">
                  <FiGithub className="hover:text-orange-text transition duration-400 ease-out" />
                </a>
              </div>
              <div>
                <a href="https://airbnb-clone-weld-eta.vercel.app" target="_blank" rel="noopener noreferrer">
                  <FiExternalLink className="hover:text-orange-text transition duration-400 ease-out" />
                </a>
              </div>
            </div>
          </li>

          <li className="grid grid-cols-12 relative h-full items-center">

            {/** Project Info */}
            <div className="text-left space-y-5 absolute flex flex-col left-0 w-3/6 col-span-4 z-10">
              <div>
                <span className="SFMono text-orange-text text-sm">Featured Project</span>
                <h2 className="text-gray-200 text-xl md:text-xl w-auto font-heebo font-semibold whitespace-nowrap">OnDigital Pro</h2>
              </div>
              <div className="bg-light-gray-bg pl-4 pr-10 h-auto py-3 rounded-md text-gray-400">
                <p>
                  Sitio web en Wordpress para grupo de asesores de inversiones en mercados forex, crypto, acciones e indíces bursátiles.
                </p>
              </div>
              <ul className="list-none flex justify-start space-x-3 text-gray-400 SFMono text-sm">
                <li>
                  PHP
                </li>
                <li>
                  WordPress
                </li>
                <li>
                  Elementor
                </li>
              </ul>
              <div className="flex justify-start w-full self-start text-gray-400 text-xl space-x-3">
                {/* <div>
                      <a href="https://github.com/entropiaCosmica/airbnb-clone" target="_blank" rel="noopener noreferrer">
                        <FiGithub className="hover:text-orange-text transition duration-400 ease-out" />
                      </a>
                    </div> */}
                <div>
                  <a href="https://www.cosmica.dev/ondigital/index.php/home/" target="_blank" rel="noopener noreferrer">
                    <FiExternalLink className="hover:text-orange-text transition duration-400 ease-out" />
                  </a>
                </div>
              </div>
            </div>

            {/** Image */}
            <div className="h-full flex justify-center col-span-7 col-end-13">
              <Image
                className="rounded-md"
                src={ondigitalImgNormal}
                alt=''
                objectFit='contain'
                objectPosition="left"
                priority="normal"
              />
            </div>
          </li>

          <li className="grid grid-cols-12 relative h-full items-center">
            {/** Image */}
            <div className="h-full flex justify-center col-span-7">
              <Image
                className="rounded-md"
                src={spotify2ImgNormal}
                alt=''
                objectFit='contain'
                objectPosition="left"
                priority="normal"
              />
            </div>

            {/** Project Info */}
            <div className="text-right space-y-5 absolute flex flex-col right-0 w-3/6 col-span-4">
              <div>
                <span className="SFMono text-orange-text text-sm">Featured Project</span>
                <h2 className="text-gray-200 text-xl md:text-xl w-auto font-heebo font-semibold whitespace-nowrap">Spotify Clone</h2>
              </div>
              <div className="bg-light-gray-bg pr-4 pl-10 h-auto py-3 rounded-md text-gray-400">
                <p>
                  Web app responsive desarrollada con la API oficial de Spotify, Next JS y Tailwind CSS, para visualizar la lista de playlists del usuario, canciones y reproductor funcional para reproducir/pausar y cambiar de canción.
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
              <div className="flex justify-end w-full self-end text-gray-400 text-xl space-x-3">
                <div>
                  <a href="https://github.com/entropiaCosmica/spotify-clone" target="_blank" rel="noopener noreferrer">
                    <FiGithub className="hover:text-orange-text transition duration-400 ease-out" />
                  </a>
                </div>
                <div>
                  <a href="https://spotify-clone-henna.vercel.app/login" target="_blank" rel="noopener noreferrer">
                    <FiExternalLink className="hover:text-orange-text transition duration-400 ease-out" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section >
  );
};

export default Portfolio