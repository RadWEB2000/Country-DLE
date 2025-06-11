"use client"

import { useCountryStore } from "@/store";
import Image from "next/image";
import { BsFillSignTurnLeftFill as TurnLeftIcon, BsFillSignTurnRightFill as TurnRightIcon } from "react-icons/bs";
import ResultItem from "./ResultItem";

export default function Results() {


    const countries = useCountryStore(state => state.countries);

    return (
        <div className="w-[98rem] max-w-[90vw] bg-red-500/0 mt-12 overflow-x-scroll" >
            <div className="bg-orange-600/0 w-fit mx-auto" >
                <ul className="grid grid-cols-[repeat(13,8rem)] text-center items-center justify-center text-md font-semibold">
                    <li>Country</li>
                    <li>Independent</li>
                    <li>Languages</li>
                    <li>Currencies</li>
                    <li>Region</li>
                    <li>Continents</li>
                    <li>Subregion</li>
                    <li>Timezones</li>
                    <li>Area</li>
                    <li>Population</li>
                    <li>Start of week</li>
                    <li>Car side</li>
                    <li>Postal Code</li>
                </ul>
            </div>
            <span className="h-[2px] w-full block bg-stone-900/50 rounded-md my-2 mx-auto" />
            <div className="bg-orange-60/00 w-fit mx-auto">
                {
                    countries?.reverse().map(({ area, carSide, continents, country, currencies, flag, independent, languages, population, postalCode, region, timezones, startOfWeek, subregion }) => {
                        return (
                            <ResultItem
                                {...{ area, carSide, continents, country, currencies, flag, independent, languages, population, postalCode, region, timezones, startOfWeek, subregion }}
                                key={`${country}-${area}-${population}`}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}