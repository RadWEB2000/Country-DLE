export default function toSquareKilometers(meters: number): string {
    const area = meters / 1000;
    return `${parseFloat(area.toFixed(2))}km<sup>2</sup>`
}