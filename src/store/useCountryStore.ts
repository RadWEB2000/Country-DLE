import { create } from "zustand";
import { persist } from "zustand/middleware";

type CountryStore = {
    countries: Array<t_Country_Table_Record>;
    addCountry: (country: t_Country_Table_Record) => void;
    lastUpdate: number;
    checkAndReset: () => void;
}

const useCountryStore = create<CountryStore>()(
    persist(
        (set, get) => ({
            countries: [],
            lastUpdate: Date.now(),
            addCountry: (newCountry) => {
                const now = new Date();
                const { lastUpdate } = get();

                const isDifferentDay = new Date(lastUpdate).toDateString() !== now.toDateString();

                if (isDifferentDay) {
                    set({
                        countries: [newCountry],
                        lastUpdate: now.getTime(),
                    });
                } else {
                    const exists = get().countries.some(state => state.country === newCountry.country);
                    if (!exists) {
                        set(state => ({
                            countries: [newCountry, ...state.countries],
                            lastUpdate: now.getTime()
                        }))
                    }
                }
            },
            checkAndReset: () => {
                const now = new Date();
                const { lastUpdate } = get();
                if (new Date(lastUpdate).toDateString() !== now.toDateString()) {
                    set({
                        countries: [],
                        lastUpdate: now.getTime()
                    })
                }
            }
        }),
        {
            name: 'selected-countries'
        }
    )
)

export default useCountryStore;