import { LuLoader } from "react-icons/lu";


export default function Loading() {
    return (
        <div className="text-slate-300 absolute top-1/2 left-1/2  -translate-1/2"><LuLoader className="text-9xl animate-spin " /></div>
    )
}