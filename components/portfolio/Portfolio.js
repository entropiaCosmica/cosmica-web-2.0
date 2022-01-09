import PortfolioItem from './PortfolioItem'
import portfolioData from '../data/portfolioData'

const Portfolio = () => {
  return (
    <section className="max-w-[1000px] py-[100px] mx-auto max-h-full" id="portfolio">
      <div className="flex flex-col space-y-5 justify-center">
        <div className="flex align-bottom items-baseline w-full mb-[40px]">
          <span className="text-orange-text SFMono text-md md:text-lg font-bold mr-2">03.</span>
          <h2 className="text-gray-200 text-xl md:text-2xl w-auto font-heebo font-semibold whitespace-nowrap">Some Things I&apos;ve Built</h2>
          <div className="border-t-[0.1em] border-gray-600 w-full bottom-1.5 relative ml-4" />
        </div>

        <ul className="space-y-20">
          {
            portfolioData.map(item => {
              return (
                <PortfolioItem
                  key={Math.random()}
                  image={item.imgs}
                  title={item.title}
                  description={item.description}
                  techs={item.technologies}
                  githubLink={item.github}
                  extLink={item.extLink}
                  inverted={item.idx === 1 ? true : false}
                />
              )
            })
          }
        </ul>
      </div>
    </section >
  );
}

export default Portfolio