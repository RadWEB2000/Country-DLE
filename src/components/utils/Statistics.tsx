"use client"
import { useStatisticsStore } from "@/store"

export default function Statistics() {

    const { score, addScore, resetScore } = useStatisticsStore();


    return (
        <div className="bg-amber-300 text-black font-bold px-4 py-1.5 rounded-2xl flex items-center justify-evenly w-fit mx-auto mt-8">
            <div onClick={resetScore} >
                {`Score: ${score}`}
            </div>
        </div>
    )
}