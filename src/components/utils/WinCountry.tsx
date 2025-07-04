"use client"
import Image from "next/image";
import AudioPlayer from "./AudioPlayer";
import { useStatisticsStore } from "@/store";
import { getDailyId } from "@/lib/functions";
export default function WinCountry({ country, culture, economy, geo }: T_Country_Single) {

    const { isTodayGuessed } = useStatisticsStore();

    if (isTodayGuessed(getDailyId())) {
        return (
            <section
                className="text-white my-8 w-[100rem] max-w-[90%] mx-auto"
            >
                <div
                    className="lg:grid lg:grid-cols-3"
                >
                    <div className="col-span-2">
                        <h2 className="text-6xl font-extrabold text-center lg:text-start xl:text-8xl" >{country.name.common}</h2>
                        <h3 className="text-2xl font-semibold mt-2 text-center lg:text-start xl:text-4xl" >{country.name.official}</h3>
                        <h4 className="text-xl opacity-50 mt-2 text-center lg:text-start xl:text-2xl" >{country.name.altSpellings}</h4>
                        <p className="text-base leading-7 mt-6 text-justify" dangerouslySetInnerHTML={{ __html: country.description }} />
                    </div>
                    <div className="flex items-center justify-start flex-col p-3 space-y-8" >
                        <div className="mx-auto " >
                            <h4 className="text-xl text-center mb-1" >Coat of arms</h4>
                            <Image
                                alt={`Coat of arms - ${country.name.common}`}
                                src={country.coatOfArms}
                                loading="eager"
                                className="object-contain object-center"
                                priority
                                height={350}
                                width={350}
                            />
                        </div>
                        <div className="mx-auto w-full " >
                            <h4 className="text-xl text-center mb-1" >Anthem</h4>
                            <div className="bg-slate-400 rounded-md w-[20rem] max-w-[80%] mx-auto ">
                                <AudioPlayer anthem={country.anthem} />
                            </div>
                        </div>
                        <div className="mx-auto " >
                            <h4 className="text-xl text-center mb-1" >Flag</h4>
                            <Image
                                alt={country.flag.alt}
                                src={country.flag.src}
                                loading="eager"
                                className="object-contain object-center mt-2"
                                priority
                                height={375}
                                width={400}
                            />
                        </div>
                    </div>
                    <ul className="flex items-center justify-start flex-wrap my-5 gap-2 col-span-3" >
                        {
                            country.name.translations.split(', ').map(item => {
                                return (
                                    <li className="px-2.5 py-1 bg-slate-700 rounded-lg" key={item} >
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <iframe
                    title='Google maps'
                    className="w-full h-96 rounded-xl"
                    src={`https://maps.google.com/maps?q=${geo.latlng[0]},${geo.latlng[1]}&z=${6}&output=embed`}
                />
                <div
                    className="mt-3 grid grid-cols-1 space-y-5 md:grid-cols-2 lg:grid-cols-3"
                >

                    <div className="mx-auto w-fit" >
                        <h3 className="font-extrabold text-xl text-slate-300 mt-1 mb-3.5 text-center">Culture</h3>
                        <ul className="space-y-3" >
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Languages</strong>
                                <p>{culture.languages}</p>
                            </li>
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Start of week</strong>
                                <p className="capitalize" >{culture.startOfWeek}</p>
                            </li>
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Traffics side</strong>
                                <p className="capitalize" >{culture.car.side}</p>
                            </li>
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Car signs</strong>
                                <p>{culture.car.signs}</p>
                            </li>
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Fifa</strong>
                                <p>{culture.fifa}</p>
                            </li>
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Demonyms</strong>
                                <p className="text-end" >Male:{culture.demonyms.m}<br />Female:{culture.demonyms.f}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto w-fit">
                        <h3 className="font-extrabold text-xl text-slate-300 mt-1 mb-3.5 text-center">Geography</h3>
                        <ul className="space-y-3" >
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Continents</strong>
                                <p>{geo.continents}</p>
                            </li>
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Region</strong>
                                <p className="capitalize" >{geo.region}</p>
                            </li>
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Subregion</strong>
                                <p>{geo.subregion}</p>
                            </li>
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Area</strong>
                                <p>{parseFloat((geo.area / 1000).toFixed(2))}km<sup>2</sup></p>
                            </li>
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Borders</strong>
                                <p>{geo.borders}</p>
                            </li>
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Capital</strong>
                                <p>{geo.capital}</p>
                            </li>
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Timezones</strong>
                                <p>{geo.timezones}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto w-fit">
                        <h3 className="font-extrabold text-xl text-slate-300 mt-1 mb-3.5 text-center">Economy</h3>
                        <ul className="space-y-3" >
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Gini</strong>
                                <p>{economy.gini}</p>
                            </li>
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Currencies</strong>
                                <p className="capitalize" >{economy.currencies}</p>
                            </li>
                            <li
                                className="flex space-x-2 justify-between"
                            >
                                <strong>Population</strong>
                                <p className="capitalize" >{economy.population}</p>
                            </li>
                        </ul>
                    </div>

                </div>


            </section>
        )
    } else return null;
}