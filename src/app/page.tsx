import { GuessCountry } from "@/components";
import getAllCountriesNames from "@/lib/getAllCountriesNames";

export default async function GuessCountryPage() {

  const countries = await getAllCountriesNames();

  console.log(countries)

  return (
    <main
      className="w-[90rem] max-w-[85%] block my-8 mx-auto bg-amber-500"
    >
      <GuessCountry countries={countries} />
      <main>
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
    </main>
  )
}