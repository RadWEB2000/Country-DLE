import { getAllCountries, getDailyCountry } from "@/lib/functions";

export default async function getWinningCountry(): Promise<T_Country_Single> {
    const countries = await getAllCountries();
    const todayCountry: T_Country_Single = getDailyCountry(countries);
    return todayCountry;
}