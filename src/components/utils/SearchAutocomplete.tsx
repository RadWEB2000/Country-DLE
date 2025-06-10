"use client"
import { Autosuggest, SuggestionRecord } from "@/parts/utils";
import { useCountryAutocomplete } from "@/lib/hooks";
import { IoAdd as AddIcon } from "react-icons/io5";
import { useContext } from "react";
import { CountrySelectedContext } from "@/contexts";

export default function SearchAutocomplete({ countries: states }: { countries: Array<t_Country_Table_Record> }) {

    const { getSuggestionValue, onSuggestionFetchRequested, onSuggestionsClearRequested, setValue, suggestions, value } = useCountryAutocomplete(states);

    const { countries, updateCountries } = useContext(CountrySelectedContext);

    // function handleSubmit() {
    //     const selectedCountry = countries.find(state => state.country || state.country.toLowerCase() === value.toLowerCase());

    //     if (!selectedCountry) {
    //         console.warn('Nie znaleziono Państwa', value)
    //     }

    //     updateCountries(selectedCountry)
    // }

    // console.log(countries)

    return (
        <>
            <div className="w-[50rem] max-w-[90%] min-h-6 bg-green-200/0 mx-auto">
                <form action="" className="grid items-center grid-cols-[1fr_3rem]" onSubmit={(e) => {
                    e.preventDefault();
                    console.log('clicked')
                    // handleSubmit();
                }} >
                    <label className="text-3xl font-bold h-15 items-center justify-start flex col-span-full" htmlFor="get_country">Get country</label>
                    <Autosuggest
                        data={states}
                        onSelect={() => { }}
                    // suggestions={suggestions}
                    // onSuggestionsFetchRequested={onSuggestionFetchRequested}
                    // onSuggestionsClearRequested={onSuggestionsClearRequested}
                    // getSuggestionValue={getSuggestionValue}
                    // renderSuggestion={SuggestionRecord}
                    />
                    <button className="items-center cursor-pointer bg-stone-200 rounded-md col-span-1 justify-center flex text-5xl h-10 w-10 mx-auto" type="submit">
                        <AddIcon className="" />
                    </button>
                </form>
            </div>
            {/* {
                states.map(({ country }) => {
                    return (
                        <li className="bg-red-200 w-fit list-none block my-4 rounded font-extrabold text-sm" key={country} >
                            {country}
                        </li>
                    )
                })
            } */}
        </>
    )
}