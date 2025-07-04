import { create } from "zustand";
import { persist } from "zustand/middleware";


type T_StatisticsStore = {
    score: number;
    lastScoredId: string;
    addScore: (dailyId: string) => void;
    resetScore: () => void;
    isTodayGuessed: (dailyId: string) => boolean;
}

const useStatisticsStore = create<T_StatisticsStore>()(
    persist(
        (set, get) => ({
            score: 0,
            lastScoredId: '',
            addScore: (dailyId: string) => {
                if (get().lastScoredId !== dailyId) {
                    set((state) => ({
                        score: state.score + 1,
                        lastScoredId: dailyId,
                        guessedDailyId: dailyId
                    }));
                }
            },
            resetScore: () => set({ score: 0, lastScoredId: '' }),
            isTodayGuessed: (dailyId: string) => get().lastScoredId === dailyId,
        }),
        {
            name: 'score'
        }
    )
)

export default useStatisticsStore;