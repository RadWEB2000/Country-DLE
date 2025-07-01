import {getDailyId} from "@/lib/functions";

export default function getDailyCountry(countries: Array<T_Country_Single>): T_Country_Single {
    const today =getDailyId();
    const hash = [...today].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % countries.length;
    return countries[index];
}

