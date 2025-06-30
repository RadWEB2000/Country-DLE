import { CountrySelectedProvider } from '@/providers';
import Table from '@/components/utils/Table';
import { Hints, SearchAutocomplete, Statistics } from '@/components/utils';
import { getAllCountries, getWinningCountry } from '@/lib/functions';
import getSingleCountry from '@/lib/functions/getSingleCountry';

export default async function GuessCountryPage() {

  const countries = (await getAllCountries());
  const win = await getWinningCountry();
  const kraj = await getSingleCountry('poland')

  console.log(`kraj`, kraj)

  // console.log('win', win)

  return (
    <CountrySelectedProvider>
      <Statistics />
      <Hints anthem={win.country.anthem} coatOfArms={win.country.coatOfArms} flag={win.country.flag} />
      <SearchAutocomplete countries={countries} />
      <main
        className="flex items-center flex-col justify-center my-8 mx-auto"
      >
        <Table country={win} />
      </main>
    </CountrySelectedProvider>
  )
}