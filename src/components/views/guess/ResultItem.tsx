import Image from "next/image";
import { BsFillSignTurnLeftFill as TurnLeftIcon, BsFillSignTurnRightFill as TurnRightIcon } from "react-icons/bs";

type Props = Omit<t_Country_Table_Record, 'status'>;

export default function ResultItem({ area, carSide, continents, country, currencies, flag, independent, languages, population, postalCode, region, timezones, startOfWeek, subregion }: Props) {
    return (
        <ul className="grid grid-cols-[repeat(13,8rem)] text-center items-center justify-center min-h-18 text-balance text-sm mt-3 nth-[odd]:bg-stone-100 rounded-md" >
            <li className="font-bold flex flex-col justify-center items-center gap-1" >
                <Image
                    alt={flag.alt}
                    className="object-contain"
                    height={20}
                    src={flag.src}
                    width={20}
                />
                <span>{country}</span>
            </li>
            <li className="flex items-center justify-center" >
                {independent ? <span className="bg-green-600 block w-6 h-6 rounded-md" /> : <span className="bg-red-600 block w-6 h-6 rounded-md" />}
            </li>
            <li>{languages.join(', ')}</li>
            <li>{currencies.join(', ')}</li>
            <li>{region}</li>
            <li>{continents.join(', ')}</li>
            <li>{subregion}</li>
            <li className="">{timezones.join(' ')}</li>
            <li>{area}m<sup>2</sup></li>
            <li>{population}</li>
            <li className="capitalize" >{startOfWeek}</li>
            <li className="flex items-center justify-center text-2xl">{carSide === 'left' ? <TurnLeftIcon /> : <TurnRightIcon />}</li>
            <li>{postalCode}</li>
        </ul>
    )
}

