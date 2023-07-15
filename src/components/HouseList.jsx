import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';

import House from './House';

import {ImSpinner2} from "react-icons/im"
import { Link } from 'react-router-dom';

const HouseList = () => {

  const {houses,loading}=useContext(HouseContext)

  console.log(houses)
  return (
    <section className='mb-20'>
      <div className="container mx-auto">
          <div>
            {houses.map((house,index)=>{
              return(
                <Link to={`/property/${house.id}`} key={index}>
                  <House house={house}/>  
                </Link>
              )
            })}
          </div>
      </div>
    </section>
  );
}

export default HouseList;
