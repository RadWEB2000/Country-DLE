import { singleCountryApi } from "@/data/constants";

export default async function getSingleCountry(state: string): Promise<countryRow> {
    const country = await fetch(`${singleCountryApi}${state}`).then(res => res.json()).then((res): countryRow => {
        return {
            country: res[0].name.official,
            area: res[0].area,
            borders: res[0].borders,
            capital: res[0].capital,
            carSide: res[0].car.side,
            currencies: res[0].currencies,
            flag: {
                alt: res[0].flags.alt,
                colors: "",
                src: res[0].flags.png
            },
            independent: res[0].independent,
            languages: res[0].languages,
            coatOfArms: res[0].coatOfArms.png,
            postalCode: res[0].postalCode.format,
            pupulation: res[0].population,
            region: res[0].region,
            subregion: res[0].subregion,
            continents: res[0].continents,
            startOfWeek: res[0].startOfWeek,
            status: res[0].status,
        }
    })

    return country
}