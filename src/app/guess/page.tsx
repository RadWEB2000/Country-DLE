import { GuessCountry } from '@/components/client';
import { Results } from '@/components/views/guess';
import { CountrySelectedProvider } from '@/providers';
import getAllCountries from '@/lib/functions/getAllCountries';

export default async function GuessCountryPage() {

  const countries = await getAllCountries();


  return (
    <CountrySelectedProvider>
      <main
        className="flex items-center flex-col justify-center my-8 mx-auto bg-amber-500/0"
      >
        <h1>Guess country</h1>
        <GuessCountry countries={countries} />
        <Results />

      </main>
    </CountrySelectedProvider>
  )
}