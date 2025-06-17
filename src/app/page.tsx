import { CountrySelectedProvider } from '@/providers';
import getAllCountries from '@/lib/functions/getAllCountries';
import getSingleCountry from '@/lib/functions/getSingleCountry';
import Table from '@/components/utils/Table';
import { SearchAutocomplete } from '@/components/utils';

export default async function GuessCountryPage() {

  const countries = (await getAllCountries());
  const win_country = await getSingleCountry('argentina');

  return (
    <CountrySelectedProvider>
      <SearchAutocomplete countries={countries} />
      <main
        className="flex items-center flex-col justify-center my-8 mx-auto bg-amber-500/0"
      >
        <Table country={win_country} />
      </main>
    </CountrySelectedProvider>
  )
}