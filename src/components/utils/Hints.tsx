"use client";

import Image from "next/image";
import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

type T_hints = {
    attempts: number;
    coatOfArms: string;
    anthem: string;
    flag: {
        alt: string;
        src: string;
    }
}

export default function Hints({ attempts, anthem, coatOfArms, flag }: T_hints) {

    console.log(`anthem ${anthem}`)
    const [currentOpenedTab, setCurrentOpenedTab] = useState<'coatOfArms' | 'flag' | 'anthem' | null>(null)

    return (
        <div
            className="bg-slate-50/90 h-fit rounded-xl mx-auto my-2 w-150 max-w-[95%] p-1"
        >
            <p className="text-center text-lg font-semibold" >Podopowiedzi</p>
            <ul className="grid grid-cols-3 mt-4" >
                <button onClick={() => setCurrentOpenedTab('coatOfArms')} className={`${currentOpenedTab === 'coatOfArms' && 'bg-slate-900 text-slate-50'} font-semibold text-sm rounded-md py-1 linear duration-200`} disabled={attempts < 5}>Herb - po 5 próbach</button>
                <button onClick={() => setCurrentOpenedTab('anthem')} className={`${currentOpenedTab === 'anthem' && 'bg-slate-900 text-slate-50'} font-semibold text-sm rounded-md py-1  linear duration-200`} disabled={attempts < 10}>Hymn - po 10 próbach</button>
                <button className={`${currentOpenedTab === 'flag' && 'bg-slate-900 text-slate-50'} font-semibold text-sm rounded-md py-1  linear duration-200`} onClick={() => setCurrentOpenedTab('flag')} disabled={attempts < 15}>Flaga - po 15 próbach</button>
            </ul>
            <div className={`${currentOpenedTab === null ? 'h-0 mt-0 p-0 opacity-0 invisible' : ' min-h-52 mt-1 p-2 opacity-100 visible '} flex items-center justify-center w-full   ease-in-out duration-200`}>
                {/* some one */}
                {
                    currentOpenedTab === 'coatOfArms' &&
                    <Image
                        alt='Coat of Arms'
                        src={coatOfArms}
                        height={150}
                        width={150}
                        loading="eager"
                        priority
                    />
                }
                {
                    currentOpenedTab === 'anthem' &&
                    <div>
                        <AudioPlayer anthem={anthem} />
                    </div>
                }
                {
                    currentOpenedTab === 'flag' &&
                    <Image
                        alt='Coat of Arms'
                        src={flag.src}
                        height={280}
                        width={300}
                        loading="eager"
                        priority
                    />
                }
            </div>
        </div>
    )
}