"use client"
import { createContext } from "react";

const CountrySelectedContext = createContext<{
    countries: Array<t_Country_Table_Record>,
    updateCountries: (country: t_Country_Table_Record) => void
}>({
    countries: [],
    updateCountries: () => { }
})


export default CountrySelectedContext;