import React, { useContext } from 'react';


import CountryDropDown from './CountryDropDown';
import PropertDropDown from './PropertDropDown';
import PriceRangeDropDown from './PriceRangeDropDown';

import {RiSearch2Line} from "react-icons/ri"

import { HouseContext } from './HouseContext';

const Search = () => {
   

  
  return (
    <div className='px-[30px] py-6 max-w-[1170px]
    mx-auto flex flex-col lg:flex-row justify-between
    gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-1 bg-white 
    lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CountryDropDown/>
      <PropertDropDown/>
      <PriceRangeDropDown/>
      <button className='bg-violet-700 hover:bg-violet-800 transition
       w-full lg:max-w-[162px] h-12 rounded-lg flex justify-center items-center
        text-white text-lg'>
         <RiSearch2Line/>
      </button>
    </div>
  );
}

export default Search;
