"use client"
import { useEffect, useRef, useState } from "react";

export default function useAutocomplete<T>(data: Array<T>, keyProp: keyof T) {
    const [query, setQuery] = useState<string>("");
    const [results, setResults] = useState<T[]>([]);
    const [show, setShow] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const timeout = setTimeout(() => {
            const filtered = data.filter((item) =>
                String(item[keyProp]).toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered.slice(0, 10));
        }, 150);
        return () => clearTimeout(timeout);
    }, [query, data, keyProp]);


    useEffect(() => {
        const listener = (e: MouseEvent) => {
            if (!containerRef.current?.contains(e.target as Node)) {
                setShow(false);
            }
        }
        document.addEventListener("mousedown", listener);
        return () => document.removeEventListener("mousedown", listener);
    }, [])

    return { query, setQuery, results, show, setShow, containerRef }
}