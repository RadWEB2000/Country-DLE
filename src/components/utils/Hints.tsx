"use client";

import { useState } from "react";

export default function Hints({attempts}:{attempts: number}) {


    const [currentOpenedTab,setCurrentOpenedTab] = useState<'coatOfArms'|'flag'|'anthem'|null>()

    return (
        <div
            className="bg-slate-200 rounded-xl mx-auto my-2 w-150 max-w-[95%] p-1"
        >
            <p className="text-center text-lg font-semibold" >Podopowiedzi</p>
            <ul className="grid grid-cols-3 mt-4" >
                <button onClick={() => setCurrentOpenedTab('coatOfArms')} className="bg-amber-400 rounded-lg" disabled={attempts < 5}>Herb - po 5 próbach</button>
                <button onClick={() => setCurrentOpenedTab('anthem')} disabled={attempts < 10}>Hymn - po 10 próbach</button>
                <button onClick={() => setCurrentOpenedTab('flag')} disabled={attempts < 15}>Flaga - po 15 próbach</button>
            </ul>
            <div className="block w-full min-h-52 mt-1 bg-slate-500/0">
            {/* some one */}
            </div>
        </div>
    )
}