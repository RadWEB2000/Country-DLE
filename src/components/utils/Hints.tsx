"use client";

import Image from "next/image";
import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { useCountryStore, useStatisticsStore } from "@/store";
import { getDailyId } from "@/lib/functions";

type T_Hints = {
    coatOfArms: string;
    anthem: string;
    flag: {
        alt: string;
        src: string;
    }
}

type T_Button = {
    title: string;
    requiredAttempts: number;
    tab: 'coatOfArms' | 'flag' | 'anthem'
}

const buttons: Array<T_Button> = [
    {
        requiredAttempts: 5,
        tab: 'coatOfArms',
        title: 'Coat of Arms'
    },
    {
        requiredAttempts: 10,
        tab: 'anthem',
        title: 'Anthem'
    },
    {
        requiredAttempts: 15,
        tab: 'flag',
        title: 'Flag'
    }
]

export default function Hints({ anthem, coatOfArms, flag }: T_Hints) {

    const [currentOpenedTab, setCurrentOpenedTab] = useState<'coatOfArms' | 'flag' | 'anthem' | null>(null)
    const { countries } = useCountryStore();

    const Button = ({ requiredAttempts, tab, title }: T_Button) => {
        return (
            <button onClick={() => setCurrentOpenedTab(tab)} className={`${currentOpenedTab === tab ? 'bg-slate-900 text-slate-50' : 'hover:bg-slate-300 disabled:hover:bg-slate-300/0'}  font-semibold text-sm rounded-md py-1 linear duration-200 cursor-pointer disabled:cursor-default`} disabled={countries.length < requiredAttempts}>
                <p>{title}</p>
                {
                    countries.length > requiredAttempts - 1 ? <> </> :
                        <span className="text-sm font-medium" >{requiredAttempts - countries.length} attempts</span>
                }
            </button>
        )
    }

    const Tabs = () => {
        switch (currentOpenedTab) {
            case 'anthem':
                return anthem ? (
                    <div>
                        <AudioPlayer anthem={anthem} />
                    </div>
                ) : 'Anthem is unknown'
            case 'coatOfArms':
                return coatOfArms ? (
                    <Image
                        alt='Coat of Arms'
                        src={coatOfArms}
                        height={150}
                        width={150}
                        loading="eager"
                        priority
                    />
                ) : 'Coat of arms is unknown'
            case 'flag':
                return flag ? (
                    <Image
                        alt='Coat of Arms'
                        src={flag.src}
                        height={280}
                        width={300}
                        loading="eager"
                        priority
                    />
                ) : 'Flag is unknonw'
            default:
                return null;
        }
    }
    const { isTodayGuessed } = useStatisticsStore();

    if (!isTodayGuessed(getDailyId())) {
        return (
            <div
                className="bg-slate-50/90 h-fit rounded-xl mx-auto my-2 w-150 max-w-[95%] px-2 py-4"
            >
                <p className="text-center text-lg font-semibold" >Hints</p>
                <ul className="flex flex-col sm:flex-row flex-wrap justify-around mt-4 gap-1 lg:grid lg:grid-cols-3" >
                    {
                        buttons.map((item) => {
                            return (
                                <Button
                                    {...item}
                                    key={item.title}
                                />
                            )
                        })
                    }
                </ul>
                <div className={`${currentOpenedTab === null ? 'h-0 mt-0 p-0 opacity-0 invisible' : ' min-h-40 mt-1 px-2 py-3 opacity-100 visible '} flex items-center justify-center w-full   ease-in-out duration-200`}>
                    <Tabs />
                </div>
            </div>
        )
    } else {
        return null;
    }
}