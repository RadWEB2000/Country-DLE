"use client"
import { Autosuggest } from "@/parts/utils";
import { IoAdd as AddIcon } from "react-icons/io5";
import { useCountryStore } from "@/store";

export default function SearchAutocomplete({ countries: states }: { countries: Array<t_Country_Table_Record> }) {

    const addCountry = useCountryStore((state) => state.addCountry);

    function handleSelect(country: t_Country_Table_Record) {
        addCountry(country);
    }

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
                        data={states.map((state) => {
                            return {
                                country: state.country,
                                flag: state.flag,
                                data: state
                            }
                        })}
                        onSelect={country => handleSelect(country)}
                    />
                    <button className="items-center cursor-pointer bg-stone-200 rounded-md col-span-1 justify-center flex text-5xl h-10 w-10 mx-auto" type="submit">
                        <AddIcon className="" />
                    </button>
                </form>
            </div>
        </>
    )
}