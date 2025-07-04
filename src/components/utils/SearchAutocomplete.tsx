"use client"
import { Autosuggest } from "@/parts/utils";
import { useCountryStore, useStatisticsStore } from "@/store";
import { getDailyId } from "@/lib/functions";

export default function SearchAutocomplete({ countries: states }: { countries: Array<T_Country_Single> }) {

    const { addCountry, currentDailyId: daily, countries } = useCountryStore();
    const { isTodayGuessed } = useStatisticsStore();

    if (!isTodayGuessed(getDailyId())) {
        return (
            <>
                <div className="w-[50rem] max-w-[90%] min-h-[25vh] mt-12 bg-green-200/0 mx-auto">
                    <form action="" className="grid items-center grid-cols-[1fr_3rem]" onSubmit={(e) => {
                        e.preventDefault();
                    }} >
                        <label className="text-3xl font-bold h-15 text-slate-100 items-center justify-start flex col-span-full" htmlFor="get_country">Get country</label>
                        <Autosuggest
                            isDisabled={isTodayGuessed(getDailyId())}
                            data={states.filter((state) => !countries.some((country) => country.country.name.official === state.country.name.official)).map((state) => {
                                return {
                                    country: state.country.name.official,
                                    flag: state.country.flag,
                                    data: state
                                }
                            })}
                            onSelect={country => addCountry(country, daily)}
                        />
                    </form>
                </div>
            </>
        )
    } else {
        return null;
    }
}