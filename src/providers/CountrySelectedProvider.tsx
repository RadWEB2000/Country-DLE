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

    const [countriesList, updateCountriesList] = useState<Array<t_Country_Table_Record>>([]);

    function updateCountries(newCountry: t_Country_Table_Record) {
        updateCountriesList((prev) => {
            const exists = prev.some((country) => country.country == newCountry.country);
            if (exists) return prev;
            return [...prev, newCountry]
        })
    }

    const setDailyId = useCountryStore((state) => state.setDailyId);
    const currentDailyId = useCountryStore((state) => state.currentDailyId);

    useEffect(() => {
        const init = async () => {
            const win = await getWinningCountry();
            const newId = win.country.name.official;

            if (currentDailyId !== newId) {
                // Reset przez addCountry z nowym dailyId
                setDailyId(newId);
            }
        };

        init();
    }, [currentDailyId, setDailyId]);

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