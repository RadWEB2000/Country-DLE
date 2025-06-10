import { useAutocomplete } from "@/lib/hooks";
import Image from "next/image";

type AutocompleteItem = {
    country: string; // wyświetlane w input
    flag: {
        alt: string;
        src: string;
    };
};

type Props = {
    data: Array<AutocompleteItem>;
    onSelect: (item: AutocompleteItem) => void
}

export default function Autosuggest({ data, onSelect }: Props) {

    const {
        query,
        setQuery,
        results,
        show,
        setShow,
        containerRef
    } = useAutocomplete(data);

    return (
        <div className="relative w-full" ref={containerRef} >
            <input value={query} onChange={(e) => { setQuery(e.target.value); setShow(true) }} placeholder="Wpisz państwo" type="text" className="capitalize w-full rounded-md border border-stone-300 text-sm p-2 outline-none focus:ring focus:ring-stone-400" />
            {
                show && results.length > 0 && (
                    <ul className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white shadow-lg" >
                        {
                            results.map((item) => {
                                return (
                                    <li
                                        key={item.name}
                                        onClick={() => {
                                            onSelect(item);
                                            setQuery(item.name);
                                            setShow(false);
                                        }}
                                        className="flex items-center gap-2 p-2 cursor-pointer hover:bg-stone-100"
                                    >
                                        <Image
                                            alt={item.flag.alt}
                                            className="h-4 w-6 object-contain object-center"
                                            height={40}
                                            src={item.flag.src}
                                            width={40}
                                        />
                                        <span className="capitalize">{item.name}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }
        </div>
    )
}