"use client"
import Autosuggest from "react-autosuggest";
import { SuggestionRecord } from "@/parts/utils";
import { useCountryAutocomplete } from "@/lib/hooks";
import { IoAdd as AddIcon } from "react-icons/io5";
import { useContext } from "react";
import { CountrySelectedContext } from "@/contexts";

export default function SearchAutocomplete({ countries: states }: { countries: Array<t_Country_Table_Record> }) {

    const { getSuggestionValue, onSuggestionFetchRequested, onSuggestionsClearRequested, setValue, suggestions, value } = useCountryAutocomplete(states);

    const { countries, updateCountries } = useContext(CountrySelectedContext);

    function handleSubmit() {
        const selectedCountry = countries.find(state => state.country || state.country.toLowerCase() === value.toLowerCase());

        if (!selectedCountry) {
            console.warn('Nie znaleziono Państwa', value)
        }

        updateCountries(selectedCountry)
    }

    // console.log(countries)

    return (
        <>
            <div className="w-[50rem] max-w-[90%] min-h-6 bg-green-200/0 mx-auto">
                <form action="" className="grid items-center grid-cols-[1fr_3rem]" onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }} >
                    <label className="text-3xl font-bold h-15 items-center justify-start flex col-span-full" htmlFor="get_country">Get country</label>
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={onSuggestionFetchRequested}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={SuggestionRecord}
                        containerProps={{
                            className: 'col-span-1 bg-stone-300 h-10 rounded-md'
                        }}
                        inputProps={{
                            className: 'outline-none bg-stone-200 block text-sm h-full p-2 text-stone-950 font-bold rounded-md w-full placeholder:text-stone-800 focus:bg-stone-300 hover:bg-stone-300 linear duration-200 capitalize',
                            placeholder: 'Wpisz nazwę państwa',
                            inputMode: "text",
                            value,
                            onChange: (_: any, { newValue }: any) => setValue(newValue)
                        }}
                        theme={{
                            suggestionsContainer: 'bg-stone-200 rounded-md mt-2 relative',
                            suggestionsList: 'list-none p-0 m-0 z-[999]',
                            suggestion: 'p-2 cursor-pointer hover:bg-stone-150 focus:bg-stone-150 linear duration-200',
                            suggestionHighlighted: 'bg-stone-300 linear duration-200'
                        }}
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