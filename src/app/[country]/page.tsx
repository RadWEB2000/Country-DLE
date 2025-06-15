import { WinCard } from "@/components/views/guess";
import getWinningCountry from "@/lib/functions/getWinningCountry";
import Link from "next/link";

export default async function CountryPage() {
    const country = await getWinningCountry('russia');
    return (
        <>
            <h1>Country Page</h1>
                    <WinCard {...country.card} />
            
            <Link href="/" >Return</Link>
        </>
    )
}