"use client"
import { createContext } from "react";

const CountrySelectedContext = createContext<{
    countries: Array<T_Country_Single>,
    updateCountries: (country: T_Country_Single) => void,
    isWin: boolean;
    updateWinStatus: (status: boolean) => void;
}>({
    countries: [],
    isWin: false,
    updateWinStatus: () => { },
    updateCountries: () => { }
})


export default CountrySelectedContext;