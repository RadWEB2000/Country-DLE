"use client"
import { Autosuggest } from "@/parts/utils";
import { useCountryStore } from "@/store";

export default function SearchAutocomplete({ countries: states }: { countries: Array<T_Country_Single> }) {

    const addCountry = useCountryStore((state) => state.addCountry);
    const daily = useCountryStore(state => state.currentDailyId)

    function handleSelect(country: T_Country_Single) {
        addCountry(country, daily);
    }

    const nations = states;

    return (
        <>
            <div className="w-[50rem] max-w-[90%] min-h-[25vh] mt-12 bg-green-200/0 mx-auto">
                <form action="" className="grid items-center grid-cols-[1fr_3rem]" onSubmit={(e) => {
                    e.preventDefault();
                }} >
                    <label className="text-3xl font-bold h-15 text-slate-100 items-center justify-start flex col-span-full" htmlFor="get_country">Get country</label>
                    <Autosuggest
                        data={states.map((state) => {
                            return {
                                country: state.country.name.official,
                                flag: state.country.flag,
                                data: state
                            }
                        })}
                        onSelect={country => handleSelect(country)}
                    />
                </form>
            </div>
        </>
    )
}