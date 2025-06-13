import Image from "next/image";
import { SiGooglemaps } from "react-icons/si";

type t_WinCard = {
    anthem: string;
    description: string;
    area: number;
    domain: string;
    independent: boolean;
    carSide: 'left' | 'right',
    currencies: Array<string>;
    capital: string;
    altSpellings: string;
    region: string;
    country: string;
    subregion: string;
    languages: Array<string>;
    borders: string;
    genders: {
        m: string;
        f: string;
    };
    map: string;
    timezones: Array<string>;
    continents: Array<string>;
    flag: {
        alt: string;
        src: string;
    };
    coatOfArms: string;
    startOfWeek: nameOfWeekDays;
    postalCode: string;
    uri: string;
}

export default function WinCard({ altSpellings, anthem, area, borders, capital, coatOfArms, continents, currencies, country, description, domain, flag, genders, independent, languages, map, postalCode, region, startOfWeek, subregion, timezones, carSide, uri }: t_WinCard) {
    console.log('anthem', anthem)
    // console.log('description', description)
    console.log(map.split('/')[4])
    return (
        <>
            <section className="mx-auto mt-10 grid grid-cols-7 w-[93.5rem] bg-stone-100/0 max-w-[95vw] gap-8">
                <div className="col-span-5 shadow-lg bg-slate-100/30 rounded-2xl p-4 flex flex-col" >
                    <div className="flex items-center justify-between mb-5" >
                        <h2 className="text-4xl font-semibold" >{country}</h2>
                        {
                            independent ? <span className="bg-green-200  px-2 py-1.5 text-sm rounded-lg font-bold block" >Independent</span> : <span className="bg-rose-200  px-2 py-1.5 text-sm rounded-lg font-bold block" >No independent</span>
                        }
                    </div>
                    <p className="line-clamp-6 leading-7 text-base max-w-[100ch] " >{description}</p>
                    <ul className="items-center flex flex-row flex-wrap gap-3 mt-auto mb-0" >
                        {
                            continents.map((item) => {
                                return (
                                    <li className="bg-slate-700 text-slate-100 font-bold px-2.5 py-1.5 rounded-md " key={item}>
                                        {item}
                                    </li>
                                )
                            })
                        }
                        <li className="border-2 border-slate-700 text-slate-700 font-bold px-2.5 py-1.5 rounded-md " >
                            {region}
                        </li>
                        <li className="border-2 border-slate-700 text-slate-700 font-bold px-2.5 py-1.5 rounded-md " >
                            {subregion}
                        </li>
                    </ul>
                </div>
                <div className="bg-slate-100/30 shadow-lg col-span-2 rounded-2xl p-4 flex flex-col items-center" >
                    <h3 className="text-xl font-semibold mb-4" >National symbols</h3>
                    <h4 className="my-2 text-lg font-bold">Flag</h4>
                    <figure className="relative w-[200px] aspect-[16/10] ">
                        <Image
                            alt={flag.alt}
                            fill
                            className="object-contain object-center"
                            src={flag.src}
                            title={flag.alt}
                        />
                    </figure>
                    <h4 className="my-2 text-lg font-bold">Coat of arms</h4>
                    <figure className="relative w-[200px] aspect-[16/15] ">
                        <Image
                            alt={flag.alt}
                            fill
                            className="object-contain object-center"
                            src={coatOfArms}
                            title={flag.alt}
                        />
                    </figure>
                </div>
            </section>
            <div
                className="mx-auto my-5 grid grid-cols-4 w-[93.5rem] max-w-[95vw] gap-4  shadow-lg bg-slate-100/30 rounded-2xl p-4 "
            >
                <button className="py-2 rounded-md font-bold duration-150 linear  cursor-pointer hover:bg-slate-300/50 hover:shadow-md focus:bg-slate-300/50 focus:shadow-md" >Overview</button>
                <button className="py-2 rounded-md font-bold duration-150 linear  cursor-pointer hover:bg-slate-300/50 hover:shadow-md focus:bg-slate-300/50 focus:shadow-md" >Goverment</button>
                <button className="py-2 rounded-md font-bold duration-150 linear  cursor-pointer hover:bg-slate-300/50 hover:shadow-md focus:bg-slate-300/50 focus:shadow-md" >Geography</button>
                <button className="py-2 rounded-md font-bold duration-150 linear  cursor-pointer hover:bg-slate-300/50 hover:shadow-md focus:bg-slate-300/50 focus:shadow-md" >Culture & Practical</button>
            </div>
            {/* Overview */}
            <div className="mx-auto mt-5 grid grid-cols-9 w-[93.5rem] bg-stone-100/0 max-w-[95vw] gap-8">
                <div
                    className="col-span-3 rounded-md border-2 border-slate-900/0 shadow-md p-4"
                >
                    <div
                        className="flex items-center justify-start font-semibold text-2xl gap-2 mb-6 text-slate-500"
                    >
                        <i>
                            <SiGooglemaps />
                        </i>
                        <span>
                            Location
                        </span>
                    </div>
                    <ul className="bg-orange-200/0 w-full space-y-3" >
                        <li className="bg-sky-400/0 flex items-center justify-between" ><strong>Capital</strong> <p>{capital}</p></li>
                        <li className="bg-sky-400/0 flex items-center justify-between" ><strong>Subregion</strong> <p>{subregion}</p></li>
                        <li className="bg-sky-400/0 flex items-center justify-between" ><strong>Region</strong> <p>{region}</p></li>
                        <li className="bg-sky-400/0 flex items-center justify-between" ><strong>Continent</strong> <p>{continents.join(', ')}</p></li>
                        {
                            borders &&
                            <li className="bg-sky-400/0 flex items-center justify-between" ><strong>Border</strong> <p>{borders}</p></li>
                        }
                    </ul>
                </div>
            </div>

            {/* <section
                className="grid grid-cols-[200px_1fr] bg-green-200/0 w-[85%] mx-auto rounded-2xl px-12 py=6"
            >
                <div
                    className="col-span-full bg-green-700/0 py-2 rounded-2xl my-5  "
                >
                    <h1 className="text-4xl text-center font-black" >{country}</h1>
                    <div className="flex items-center justify-center gap-4 mt-4 font-semibold text-xl" >
                        {
                            altSpellings.split(', ').map(item => <h2>{item}</h2>)
                        }
                    </div>
                </div>
                <div
                    className="col-span-1  col-start-1  bg-blue-200/0 flex flex-col gap-2"
                >
                    <figure className="relative w-full  aspect-square bg-stone-200/0">
                        <Image
                            alt={flag.alt}
                            fill
                            className="object-contain object-center"
                            src={flag.src}
                            title={flag.alt}
                        />
                    </figure>
                    <figure className="relative w-full aspect-square">
                        <Image
                            alt={flag.alt}
                            fill
                            className="object-contain object-center"
                            src={coatOfArms}
                            title={flag.alt}
                        />
                    </figure>
                </div>
                <div className="col-span-2 px-4 py-2 bg-orange-500/0 col-start-2 grid grid-cols-6">
                    <div className="bg-lime-400/0 col-span-3" >
                        <ul className="text-start" >
                            <li>
                                <strong className="mb-0.5 block text-purple-950" >Capital: </strong>
                                <p className="text-sm text-stone-600" >{capital}</p>
                            </li>
                            <div
                                className="grid grid-cols-2 my-2"
                            >
                                <li>
                                    <strong className="mb-0.5 block text-purple-950" >Male</strong>
                                    <p className="text-sm text-stone-600">{genders.m}</p>
                                </li>
                                <li>
                                    <strong className="mb-0.5 block text-purple-950" >Female</strong>
                                    <p className="text-sm text-stone-600">{genders.f}</p>
                                </li>
                            </div>
                            <div
                                className="grid grid-cols-2 my-2"
                            >
                                <li>
                                    <strong className="mb-0.5 block text-purple-950" >Timezones: </strong>
                                    <p className="text-sm text-stone-600">{timezones}</p>
                                </li>
                                <li >
                                    <strong className="mb-0.5 block text-purple-950">Borders: </strong>
                                    <p className="text-sm text-stone-600">{borders}</p>
                                </li>
                            </div>
                            <div
                                className="grid grid-cols-3 my-2"
                            >
                                <li>
                                    <strong className="mb-0.5 block text-purple-950" >Continents</strong>
                                    <p className="text-sm text-stone-600">{continents.join(', ')}</p>
                                </li>
                                <li>
                                    <strong className="mb-0.5 block text-purple-950" >Region </strong>
                                    <p className="text-sm text-stone-600">{region}</p>
                                </li>
                                <li>
                                    <strong className="mb-0.5 block text-purple-950" >Subregion </strong>
                                    <p className="text-sm text-stone-600">{subregion}</p>
                                </li>
                            </div>
                            <div
                                className="grid grid-cols-3 my-2"
                            >
                                <li>
                                    <strong className="mb-0.5 block text-purple-950" >Start of week</strong>
                                    <p className="text-sm text-stone-600 capitalize">{startOfWeek}</p>
                                </li>
                                <li>
                                    <strong className="mb-0.5 block text-purple-950" >Side of car</strong>
                                    <p className="text-sm text-stone-600">{carSide}</p>
                                </li>
                                <li>
                                    <strong className="mb-0.5 block text-purple-950" >Postal code</strong>
                                    <p className="text-sm text-stone-600">{postalCode}</p>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="bg-green-200/0 col-span-3" >
                        <audio controls  >
                            <source src={anthem} type="audio/mpeg" />
                        </audio>
                        <p
                            dangerouslySetInnerHTML={{ __html: description }}
                            className="line-clamp-4 text-md font-semibold w-[80ch] ml-auto mr-0"
                            style={{
                                textWrap: 'pretty'
                            }}
                        />
                        <iframe src={`https://www.openstreetmap.org/export/embed.html&relation=${map.split('/')[4]}`} />
                    </div>
                </div>
            </section> */}
        </>
    )
}