import { CountrySelectedProvider } from '@/providers';
import Table from '@/components/utils/Table';
import { Hints, SearchAutocomplete, Statistics } from '@/components/utils';
import { getAllCountries, getWinningCountry, WinCountry } from '@/lib/functions';

export default async function GuessCountryPage() {

  const countries = (await getAllCountries());
  const win = await getWinningCountry();

  return (
    <CountrySelectedProvider>
      <Statistics />
      <Hints anthem={win.country.anthem} coatOfArms={win.country.coatOfArms} flag={win.country.flag} />
      <SearchAutocomplete countries={countries} />
      <WinCountry {...win} />
      <main
        className="flex items-center flex-col justify-center my-8 mx-auto"
      >
        <Table country={win} />
      </main>
    </CountrySelectedProvider>
  )
}