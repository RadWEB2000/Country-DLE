import { create } from "zustand";
import { persist } from "zustand/middleware";

type CountryStore = {
    countries: Array<T_Country_Single>;
    addCountry: (country: T_Country_Single, dailyId: string) => void;
    setDailyId: (id: string) => void;
    checkDailyId: (id: string) => void;
    currentDailyId: string;
    lastUpdate: number;
    checkAndReset: () => void;
}

const useCountryStore = create<CountryStore>()(
    persist(
        (set, get) => ({
            countries: [],
            lastUpdate: Date.now(),
            currentDailyId: '',
            setDailyId: (id) => set({ currentDailyId: id, countries: [] }),
            checkDailyId: id => {
                if (get().currentDailyId !== id) {
                    set({
                        currentDailyId: id,
                        countries: []
                    })
                }
            },
            addCountry: (newCountry, dailyId) => {
                const { currentDailyId, countries } = get();

                // jeśli losowanie się zmieniło — resetuj store
                if (currentDailyId !== dailyId) {
                    set({
                        countries: [newCountry],
                        currentDailyId: dailyId
                    });
                    return;
                }

                const exists = countries.some(
                    (state) => state.country.name.official === newCountry.country.name.official
                );

                if (!exists) {
                    set({
                        countries: [newCountry, ...countries],
                        currentDailyId: dailyId
                    });
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