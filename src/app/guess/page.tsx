import dynamic from 'next/dynamic';


import getAllCountriesNames from "@/lib/getAllCountriesNames";
import { GuessCountry } from '@/components/client';
import { Results } from '@/components/views/guess';
import { CountrySelectedProvider } from '@/providers';
import getAllCountries from '@/lib/functions/getAllCountries';

export default async function GuessCountryPage() {

    const countries = await getAllCountries();


    return (
        <CountrySelectedProvider>
            <main
                className="w-[90rem] max-w-[85%] block my-8 mx-auto bg-amber-500/0"
            >
                <h1>Guess country</h1>
                <GuessCountry countries={countries} />
                <Results />
                {/* <ul
          className="flex items-center justify-start gap-2 flex-wrap p-5"
        >
          {countries.map((item, index) => {
            return (
              <li className="bg-purple-200 py-1 px-2 flex items-center justify-center" key={`${item}-${index}`} >
                {item}
              </li>
            )
          })}
        </ul> */}
            </main>
        </CountrySelectedProvider>
    )
}