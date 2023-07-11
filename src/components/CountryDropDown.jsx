import React, { useContext, useEffect, useState } from 'react';
import { RiMapPinLine,RiArrowDownSLine,RiArrowUpSLine,} from 'react-icons/ri';

import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';



const CountryDropDown = () => {

  const {country,setCountry,countries}=useContext(HouseContext)


    console.log(countries)


      const [isOpen,setIsOpen]=useState(false)


  return (
    <Menu as='div' className='dropdown relative'>
       <Menu.Button onClick={()=>setIsOpen(!isOpen)} className='dropdown-btn w-full
       text-left '>
       
         <RiMapPinLine className='dropdown-icon-primary'/>
         <div>
          <div>{country}</div>
          <div className='text-[13px]'>Select Your Place</div>
         </div>
         {
            isOpen ? (
              <RiArrowUpSLine className='dropdown-icon-secondary'/>
            ) :(
              <RiArrowDownSLine className='dropdown-icon-secondary'/>
            )
          }
       </Menu.Button>


       <Menu.Items>
          {countries.map((country,index)=>{
            return(

              <Menu.Item onClick={()=>setCountry(country)}
               className='cursor-pointer hover:text-violet-700 transition'
               as='li' key={index}>

              </Menu.Item>
            )
          })}
       </Menu.Items>
    </Menu>
  );
}

export default CountryDropDown;

//dropdown-icon-primary => is  a costum css
