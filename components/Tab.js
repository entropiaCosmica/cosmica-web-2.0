import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import useWidth from '../hooks/useWidth'


const Tab = ({ title, company, dates, responsibilities, link, index }) => {
  const getWidth = useWidth()

  return (
    <div>
      <h3 className="space-x-2 font-heebo font-medium text-xl">
        {
          getWidth <= 1024
            ? <div>
              <div className="text-gray-300">{title}</div>
              <div className="text-orange-text">@ <a href={link} className="hover:underline" target="_blank" rel="noopener noreferrer">{company}</a></div>
            </div>
            : <div>
              <span className="text-gray-300">{title}</span>
              <span className="text-orange-text"> @ <a href={link} className="hover:underline" target="_blank" rel="noopener noreferrer">{company}</a></span>
            </div>
        }
      </h3>
      <p className="pt-2 pb-4 text-gray-500 SFMono text-xs">{dates}</p>

      <div>
        <ul className="list-none list-inside text-sm md:text-lg space-y-3 h-auto">
          {
            responsibilities.map((item) => {
              return (
                <div key="" className="flex gap-2 max-w-full items-start font-heebo">
                  <IoMdArrowDropright className="col-span-1 flex-shrink-0 text-orange-text text-xl" />
                  <li className="text-base col-span-6 text-gray-500" >{item}</li>
                </ div>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Tab;