import React, { createContext, useState } from 'react';


import { housesData } from '../asssets/Data/data';


export const HouseContext =createContext()

const HouseContextProvider = ({children}) => {

    const [houses,setHouse]=useState(housesData)
    const [country,setCountry]=useState('Location(any)')
    const [countries,setCountries]=useState([])
    const [property,setProperty]=useState("property type (any)")
    const [properties,setPropeties]=useState([])
    const [price,setPrice]=useState('price range (any)')
    const [loading,setLoading]=useState('false')


  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,


    }}>
    {children}
    </HouseContext.Provider>
      
    
  );
}

export default HouseContextProvider;



//create a context
