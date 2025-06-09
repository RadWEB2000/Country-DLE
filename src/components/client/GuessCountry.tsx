"use client"
import { SearchAutocomplete } from "@/parts/utils";

export default function GuessCountry({ countries }: { countries: Array<t_Country_Table_Record> }) {
    return (
        <SearchAutocomplete countries={countries} />
    )
}