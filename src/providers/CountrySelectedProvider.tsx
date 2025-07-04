"use client"
import { CountrySelectedContext } from "@/contexts";
import { getWinningCountry } from "@/lib/functions";
import { useCountryStore } from "@/store";
import { useEffect, useState } from "react";

export default function CountrySelectedProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [countriesList, updateCountriesList] = useState<Array<T_Country_Single>>([]);
    const setDailyId = useCountryStore((state) => state.setDailyId);
    const reset = useCountryStore((state) => state.checkAndReset);
    const currentDailyId = useCountryStore((state) => state.currentDailyId);


    function updateCountries(newCountry: T_Country_Single) {
        updateCountriesList((prev) => {
            const exists = prev.some((country) => country.country == newCountry.country);
            if (exists) return prev;
            return [...prev, newCountry]
        })
    }

    useEffect(() => {
        const init = async () => {
            const win = await getWinningCountry();
            const newId = win.country.name.official;

            if (currentDailyId !== newId) {
                setDailyId(newId);
            }
        };

        init();
    }, [currentDailyId, setDailyId]);

    useEffect(() => {
        reset();
    }, []);

    return (
        <CountrySelectedContext.Provider
            value={{
                countries: countriesList,
                updateCountries: updateCountries,
            }}
        >
            {children}
        </CountrySelectedContext.Provider>
    )
}