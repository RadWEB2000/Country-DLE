import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { staticData } from "@/data/staticData";
export default function Navigation() {

    const { brand, menu } = staticData.navigation;

    return (
        <nav
            className="sticky top-0 w-full bg-white shadow-md min-h-[50px] flex items-center justify-between px-12 py-2 z-[9999999999]"
        >
            <Link className="flex items-center justify-start gap-2" href='/' hrefLang="en" >
                <figure
                    className="relative h-[40px] w-[40px]"
                >
                    <Image
                        {...brand.logo}
                        fill
                        className="object-contain object-center"
                        loading="eager"
                        priority
                    />
                </figure>
                <span className="font-semibold text-slate-950 linear duration-150 hover:text-slate-700" >
                    {brand.label}
                </span>
            </Link>
            <menu className="flex items-center gap-2 justify-end" >
                {
                    menu.map(({ label, uri }) => {
                        return (
                            <Link className="border-2 border-slate-900/20 text-slate-800/75 block font-extralight rounded-md px-2.5 py-1 linear duration-150 hover:border-slate-900/75 hover:text-slate-800 focus:border-slate-900/75 focus:text-slate-800" href={uri} key={`${label}-${uri}`} >
                                {label}
                            </Link>
                        )
                    })
                }
            </menu>
        </nav>
    )
}