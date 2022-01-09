import { useEffect, useState } from 'react';
import TabInfo from './TabInfo'
import data from '../data/workData'
import useWidth from '../../hooks/useWidth'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [tabInfo, setTabInfo] = useState([])

  const tabStyles = {
    mobile: [
      "border-b-2",
      "h-14",
      "px-4",
      "text-center"
    ],
    normal: [
      "border-l-2",
      "h-10",
      "px-4",
      "text-left"
    ]
  }

  const strTabStyles = tabStyles.normal.join(' ').toString()
  const strTabStylesMobile = tabStyles.mobile.join(' ').toString()

  const getWidth = useWidth()

  useEffect(() => {
    if (activeTab !== undefined) {
      handleTabInfo(activeTab)
    }
  }, [activeTab])

  const handleActiveTab = (item) => {
    setActiveTab(item.idx)
  }

  const handleTabInfo = (index) => {
    setTabInfo(
      {
        index: data[index].idx,
        title: data[index].title,
        company: data[index].company,
        dates: data[index].dates,
        link: data[index].link,
        responsibilities: data[index].responsibilities,
      }
    )
  }

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
          <div className={`SFMono text-sm overflow-x-scroll whitespace-nowrap ${getWidth > 375 ? 'flex' : null} justify-center`}>
            {
              data.map((item) => {
                return (
                  <button
                    key={Math.random()}
                    onClick={() => handleActiveTab(item)}
                    className={activeTab === item.idx ? `${strTabStylesMobile} activeTab` : `${strTabStylesMobile} unactiveTab`}>
                    {item.company}
                  </button>
                )
              })
            }
          </div>

          {/** Content */}
          <div className="flex flex-col space-y-10 h-fit">
            {
              <TabInfo
                title={tabInfo.title}
                company={tabInfo.company}
                dates={tabInfo.dates}
                responsibilities={tabInfo.responsibilities}
                link={tabInfo.link}
                index={tabInfo.index}
              />
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
                < button
                  key={Math.random()}
                  onClick={() => handleActiveTab(item)}
                  className={activeTab === item.idx ? `${strTabStyles} activeTab` : `${strTabStyles} unactiveTab`}>
                  {item.company}
                </button>
              )
            })
          }
        </div>

        {/** Content */}
        <div className="flex flex-col space-y-3 h-fit">
          {
            <TabInfo
              title={tabInfo.title}
              company={tabInfo.company}
              dates={tabInfo.dates}
              responsibilities={tabInfo.responsibilities}
              link={tabInfo.link}
              index={tabInfo.index}
            />
          }
        </div>
      </div>
    </div>

  )
}

export default Tabs
