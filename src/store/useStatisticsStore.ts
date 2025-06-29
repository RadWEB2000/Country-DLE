import { create } from "zustand";
import { persist } from "zustand/middleware";


type T_StatisticsStore = {
    score: number;
    addScore: (dailyId: string) => void;
    alreadyScored: (dailyId: string) => boolean;
    lastScoredId: string;
    resetScore: () => void;
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
                        lastScoredId: dailyId
                    }));
                }
            },
             alreadyScored: (dailyId: string) => {
                return get().lastScoredId === dailyId;
            },
            resetScore: () => set({ score: 0, lastScoredId: '' }),
        }),
        {
            name: 'score'
        }
    )
)

export default useStatisticsStore;