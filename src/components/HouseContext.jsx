import React, { createContext, useEffect, useState } from "react";

import { housesData } from "../asssets/Data/data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouse] = useState(housesData);
  const [country, setCountry] = useState("Location(any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("property type (any)");
  const [properties, setPropeties] = useState([]);
  const [price, setPrice] = useState("price range (any)");
  const [loading, setLoading] = useState("false");

  //return all counties
  useEffect(() => {
    const allcountries = houses.map((house) => {
      return house.country;
    });

    //remove dup from countries
    const uniqueCountries = ["Location (any)", ...new Set(allcountries)];

    setCountries(uniqueCountries);
  }, []);

  //return all properties

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    //remove dup from countries
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];

    setPropeties(uniqueProperties);
  }, []);

  const handleClick = () => {
    console.log("totel result",country,property,price);
  };

  return (
    <HouseContext.Provider
      value={{
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
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;

//create a context
