import { shortnessPopulation } from "@/lib/functions";
import Image from "next/image";
import { ImCheckmark, ImCross } from "react-icons/im";
import { BsArrowLeftCircleFill as Left, BsArrowRightCircleFill as Right } from "react-icons/bs";

type T_TableRecord = {
    compared: ComparisonStatusdCountries;
    isWin: boolean;
    area: number;
    borders: string;
    continents: string;
    currencies: string;
    day: nameOfWeekDays;
    flag: { alt: string; src: string };
    gini: number
    isIndependent: boolean;
    langs: string
    population: number;
    region: string
    side: carSide;
    subregion: string
    timezones: string;
    title: string;
}

export default function TableRecord({ compared, area, borders, continents, currencies, day, flag, gini, isIndependent, langs, population, region, side, subregion, timezones, title, isWin }: T_TableRecord) {


    return (
        <ul className={`grid  grid-cols-[repeat(14,_150px)] lg:grid-cols-14 lg:w-auto bg-slate-700/10 w-fit my-2 items-center rounded-md justify-center px-2 py-1 text-center text-slate-100 odd:bg-slate-700/30 gap-2 ${isWin && 'win'}`}>
            <li className="cell flex flex-col items-center text-center justify-center !py-4" data-compare={compared.name}>
                <Image
                    alt={flag.alt}
                    height={60}
                    className="object-contain object-center"
                    width={60}
                    loading="lazy"
                    quality={25}
                    src={flag.src}
                />
                <strong className="text-sm mt-1.5 font-bold" >{title}</strong>
            </li>
            <li className="cell !text-2xl" data-compare={compared.independent}>
                {isIndependent ? <ImCheckmark /> : <ImCross />}
            </li>
            <li className="cell" data-compare={compared.languages} >
                {langs}
            </li>
            <li className="cell flex items-center justify-center flex-col" data-compare={compared.carSide} >
                <i className="text-2xl h-8 w-8 flex items-center justify-center">
                    {side === 'left' ? <Left /> : <Right />}
                </i>
                <span className="capitalize" >
                    {side}
                </span>
            </li>
            <li className="cell capitalize" data-compare={compared.startOfWeek}>
                {day}
            </li>
            <li className="cell" data-compare={compared.currencies} >
                {currencies}
            </li>
            <li className="cell" data-compare={compared.gini}>
                {gini}
            </li>
            <li className="cell" data-compare={compared.population} >
                {shortnessPopulation(population)}
            </li>
            <li className="cell" data-compare={compared.area} >
                {parseFloat((area / 1000).toFixed(2))} km<sup>2</sup>
            </li>
            <li className="cell" data-compare={compared.borders}>
                {borders}
            </li>
            <li className="cell" data-compare={compared.region} >
                {region}
            </li>
            <li className="cell" data-compare={compared.continents} >
                {continents}
            </li>
            <li className="cell" data-compare={compared.subregion} >
                {subregion}
            </li>
            <li className="cell" data-compare={compared.timezones} >
                {timezones.split(', ').map((item) => {
                    if (item === 'UTC') {
                        return 0;
                    } else {
                        return item.replace('UTC', '').replace(':00', '').replace('+0', '-').replace('-0', '+') + 'h'
                    }
                }).join(', ')}
            </li>
        </ul>
    )
}