import { CountrySelectedProvider } from '@/providers';
import getAllCountries from '@/lib/functions/getAllCountries';
import getSingleCountry from '@/lib/functions/getSingleCountry';
import Table from '@/components/utils/Table';
import { SearchAutocomplete } from '@/components/utils';
import { getWinningCountry } from '@/lib/functions';

export default async function GuessCountryPage() {

  const countries = (await getAllCountries());
  const win_country = await getSingleCountry('argentina');
  const win = await getWinningCountry();

  console.log('win', win)

  return (
    <CountrySelectedProvider>
      <SearchAutocomplete countries={countries} />
      <main
        className="flex items-center flex-col justify-center my-8 mx-auto"
      >
        <Table country={win} />
      </main>
    </CountrySelectedProvider>
  )
}