import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import useCurrentWidth from '../hooks/getWidth'


const Tab = ({ title, company, dates, responsibilities }) => {
  const getWidth = useCurrentWidth()

  return (
    <div className="">
      <h3 className="space-x-2 font-heebo font-medium text-xl">
        <span className="text-gray-300">{title}</span>
        <span className="text-orange-text">@ <a href="#" className="hover:underline">{company}</a></span>
      </h3>
      <p className="pt-2 pb-4 text-gray-500 SFMono text-xs">{dates}</p>

      <div>
        <ul className="list-none list-inside text-sm md:text-lg space-y-1 h-auto">
          {
            responsibilities.map((item, idx) => {
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