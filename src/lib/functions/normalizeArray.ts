export default function normalizeArray(text: string): Array<string> {
    return text.split(', ').map(word => word.trim().toLowerCase()).sort();
}