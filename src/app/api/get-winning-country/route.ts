import { getAllCountries, getDailyCountry } from "@/lib/functions";
import { NextResponse } from "next/server";


export async function GET() {
    const countries = await getAllCountries();
    const daily = getDailyCountry(countries);
    return NextResponse.json(daily);
}