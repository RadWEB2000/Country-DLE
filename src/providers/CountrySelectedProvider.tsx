"use client"
import { CountrySelectedContext } from "@/contexts";
import { useState } from "react";

export default function CountrySelectedProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [countriesList, updateCountriesList] = useState<Array<t_Country_Table_Record>>([]);

    function updateCountries(newCountry: t_Country_Table_Record) {
        updateCountriesList((prev) => {
            const exists = prev.some((country) => country.country == newCountry.country);
            if (exists) return prev;
            return [...prev, newCountry]
        })
    }

    console.log(countriesList)

    return (
        <CountrySelectedContext.Provider
            value={{
                countries: countriesList,
                updateCountries: updateCountries
            }}
        >
            {children}
        </CountrySelectedContext.Provider>
    )
}