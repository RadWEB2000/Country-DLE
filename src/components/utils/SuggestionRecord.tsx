import Image from "next/image";

export default function SuggestionRecord({ country, flag }: Omit<t_Country_Table_Record, 'independent' | 'status' | 'region' | 'subregion' | 'area' | 'population' | 'timezones' | 'continents' | 'startOfWeek' | 'carSide' | 'currencies' | 'languages' | 'postalCode'>) {
    return (
        <div className="flex items-center gap-12 p-1 ">
            <Image
                alt={`${flag.alt}`}
                className="w-6 h-6 object-contain object-center"
                height={40}
                src={flag.src}
                width={40}
            />
            <span >{country}</span>
        </div>
    )
}