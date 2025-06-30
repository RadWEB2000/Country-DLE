"use client"
import compareCountries from "@/lib/functions/compareCountries"
import TableRecord from "./TableRecord"
import { useCountryStore, useStatisticsStore } from "@/store";
import { useEffect } from "react";

export default function Table({ country }: { country: T_Country_Single }) {


    const dailyId = new Date().toISOString().slice(0, 10);

    const { addScore, alreadyScored } = useStatisticsStore();

    const { countries } = useCountryStore();

    useEffect(() => {
        const hasCorrectCountry = countries.some(
            (c) => c.country.name.official === country.country.name.official
        );

        if (hasCorrectCountry && !alreadyScored(dailyId)) {
            addScore(dailyId);
        }
    }, [countries, country, dailyId, addScore, alreadyScored]);

    return (
        <div className="w-[100rem] max-w-[95%] mx-auto relative cursor-default select-none" >
            <ul className="grid grid-cols-14 mb-2 bg-slate-100 text-slate-900 items-center rounded-md justify-center py-6 px-2 text-center font-bold sticky top-5 text-sm gap-2 shadow-2xl z-[999]">
                <li>Country</li>
                <li>Independent</li>
                <li>Languages</li>
                <li>Car side</li>
                <li>Start week</li>
                <li>Currencies</li>
                <li>Gini</li>
                <li>Population</li>
                <li>Area</li>
                <li>Borders</li>
                <li>Region</li>
                <li>Continents</li>
                <li>Subregion</li>
                <li>Timezones</li>
            </ul>
            {
                countries.map(({ country: state, culture, economy, geo }) => {

                    const isWin = state.name.official === country.country.name.official;

                    const compared = compareCountries(country, {
                        country: {
                            anthem: state.anthem,
                            coatOfArms: state.coatOfArms,
                            flag: state.flag,
                            independent: state.independent,
                            name: state.name
                        },
                        culture: {
                            car: culture.car,
                            languages: culture.languages,
                            startOfWeek: culture.startOfWeek
                        },
                        economy,
                        geo
                    })


                    return (
                        <TableRecord
                            compared={compared}
                            isWin={isWin}
                            area={geo.area}
                            borders={geo.borders}
                            continents={geo.continents}
                            currencies={economy.currencies}
                            day={culture.startOfWeek}
                            flag={state.flag}
                            gini={economy.gini}
                            isIndependent={state.independent.status}
                            langs={culture.languages}
                            population={economy.population}
                            region={geo.region}
                            side={culture.car.side}
                            subregion={geo.subregion}
                            timezones={geo.timezones}
                            title={state.name.official}
                            key={state.name.official}
                        />
                    )
                })
            }

        </div>
    )
}