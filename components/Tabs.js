import { useState } from 'react';
import Tab from './Tab'
import data from './data/portfolioData'
import useWidth from '../hooks/getWidth'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tabDefStyles = [
    "border-l-2",
    "h-10",
    "px-4",
    "text-left"
  ]

  const tabDefStylesMobile = [
    "border-b-2",
    "h-14",
    "px-4",
    "text-center"
  ]

  const strTabStyles = tabDefStyles.join(' ').toString()
  const strTabDefStylesMobile = tabDefStylesMobile.join(' ').toString()

  const setTabInfo = (active) => {
    switch (active) {
      case 0:
        return <Tab
          title={data[0].title}
          company={data[0].company}
          dates={data[0].dates}
          responsibilities={data[0].responsibilities}
        />

      case 1:
        return <Tab
          title={data[1].title}
          company={data[1].company}
          dates={data[1].dates}
          responsibilities={data[1].responsibilities}
        />

      case 2:
        return <Tab
          title={data[2].title}
          company={data[2].company}
          dates={data[2].dates}
          responsibilities={data[2].responsibilities}
        />
    }
  }

  const getWidth = useWidth()

  if (getWidth < 768) {
    return (
      <div className="space-y-8">
        <div className="flex align-bottom items-baseline">
          <span className="text-orange-text SFMono text-md md:text-lg font-bold mr-2">02.</span>
          <h2 className="text-gray-200 text-xl md:text-2xl w-auto font-heebo font-semibold whitespace-nowrap">Where I&apos;ve Worked</h2>
          <div className="border-t-[0.1em] border-gray-600 w-full bottom-1.5 relative ml-4" />
        </div>
        <div className="flex flex-col space-y-5">

          {/** Sidebar */}
          <div className="SFMono text-sm overflow-x-scroll whitespace-nowrap md:flex justify-center">
            {
              data.map((item) => {
                return (
                  <button
                    key={item.idx}
                    onClick={() => setActiveTab(item.idx)}
                    className={activeTab === item.idx ? `${strTabDefStylesMobile} activeTab` : `${strTabDefStylesMobile} unactiveTab`}>
                    {item.company}
                  </button>
                )
              })
            }
          </div>

          {/** Content */}
          <div className="flex flex-col space-y-10 h-[300px]">
            {
              setTabInfo(activeTab)
            }
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-10" >
      <div className="flex align-bottom items-baseline">
        <span className="text-orange-text SFMono text-md md:text-lg font-bold mr-2">02.</span>
        <h2 className="text-gray-200 text-xl md:text-2xl w-auto font-heebo font-semibold whitespace-nowrap">Where I&apos;ve Worked</h2>
        <div className="border-t-[0.1em] border-gray-600 w-full bottom-1.5 relative ml-4" />
      </div>
      <div className="flex space-x-8">

        {/** Sidebar */}
        <div className="flex flex-col SFMono text-sm whitespace-nowrap">
          {
            data.map((item) => {
              return (
                <button
                  key={item.idx}
                  onClick={() => setActiveTab(item.idx)}
                  className={activeTab === item.idx ? `${strTabStyles} activeTab` : `${strTabStyles} unactiveTab`}>
                  {item.company}
                </button>
              )
            })
          }
        </div>

        {/** Content */}
        <div className="flex flex-col space-y-3 h-[300px]">
          {
            setTabInfo(activeTab)
          }
        </div>
      </div>
    </div>

  )
}

export default Tabs
