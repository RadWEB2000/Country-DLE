"use client"
import { createContext } from "react";

const CountrySelectedContext = createContext<{
    countries: Array<T_Country_Single>,
    updateCountries: (country: T_Country_Single) => void,

}>({
    countries: [],
    updateCountries: () => { }
})


export default CountrySelectedContext;