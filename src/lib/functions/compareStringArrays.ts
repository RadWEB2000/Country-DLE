import { normalizeArray } from "@/lib/functions";

export default function compareStringArrays(a: string, b: string): ComparisonStatus {
    const array_A = normalizeArray(a);
    const array_B = normalizeArray(b);

    const match = array_A.length === array_B.length && array_A.every((item, index) => item === array_B[index]);
    const checkMatch = array_A.some(value => array_B.includes(value));

    if (match) return 'done';
    if (checkMatch) return 'close';
    return 'wrong'
}