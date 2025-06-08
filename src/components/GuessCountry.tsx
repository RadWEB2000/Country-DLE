"use client"
export default function GuessCountry({ countries }: { countries: Array<string> }) {
    return (
        <div className="w-full h-6 bg-green-200 mx-auto">
            <form action="" className="flex flex-col" onSubmit={(e) => e.preventDefault()} >
                <label htmlFor="get_country">Get country</label>
                <input className="bg-red-900 text-white" type="text" name="get_country" id="get_country" />
                <datalist>
                    {
                        countries.map((country, index) => (
                            <option value={country} key={`${country}-${index}`} />
                        ))
                    }
                </datalist>
            </form>
        </div>
    )
}