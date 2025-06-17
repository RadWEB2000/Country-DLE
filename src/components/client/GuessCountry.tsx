"use client"
import { SearchAutocomplete } from "@/parts/utils";

export default function GuessCountry({ countries }: { countries: Array<T_Country_Single> }) {
    return (
        <SearchAutocomplete countries={countries} />
    )
}