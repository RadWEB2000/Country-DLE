"use client"

import { CountrySelectedContext } from "@/contexts"
import { useCountryStore } from "@/store";
import { useContext } from "react"
import { BsFillSignTurnLeftFill as TurnLeftIcon, BsFillSignTurnRightFill as TurnRightIcon } from "react-icons/bs";

export default function Results() {

    const { countries } = useContext(CountrySelectedContext);

    const panstwa = useCountryStore(state => state.countries);
    console.log(Object.values(panstwa))

    return (
        <div className="w-[98rem] max-w-[90vw] bg-red-500/0 mt-12 overflow-x-scroll" >
            <div className="bg-orange-600/0 w-fit mx-auto" >
                <ul className="grid grid-cols-[repeat(12,8rem)] text-center items-center justify-center text-md font-semibold">
                    <li>Country</li>
                    <li>Independent</li>
                    <li>Status</li>
                    <li>Currencies</li>
                    <li>Region</li>
                    <li>Continents</li>
                    <li>Subregion</li>
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
                    panstwa?.map(({ area, carSide, continents, country, currencies, flag, independent, languages, population, postalCode, region, status, timezones, startOfWeek, subregion }) => {
                        return (
                            <ul className="grid grid-cols-[repeat(12,8rem)] text-center items-center justify-center min-h-18 text-balance text-sm mt-3 nth-[odd]:bg-stone-100 rounded-md" >
                                <li className="font-bold" >{country}</li>
                                <li className="flex items-center justify-center" >
                                    {independent ? <span className="bg-green-600 block w-6 h-6 rounded-md" /> : <span className="bg-red-600 block w-6 h-6 rounded-md" />}
                                </li>
                                <li>{status ? status : 'unknown'}</li>
                                <li>{currencies.join(', ')}</li>
                                <li>{region}</li>
                                <li>{continents.join(', ')}</li>
                                <li>{subregion}</li>
                                <li>{area}m<sup>2</sup></li>
                                <li>{population}</li>
                                <li>Start of week</li>
                                <li className="flex items-center justify-center text-2xl">{carSide === 'left' ? <TurnLeftIcon /> : <TurnRightIcon />}</li>
                                <li>{postalCode}</li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}