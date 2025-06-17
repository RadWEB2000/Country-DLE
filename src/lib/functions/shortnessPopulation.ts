export default function shortnessPopulation(population: number): string {
    if (population >= 1_000_000_000) {
        return (population / 1_000_000_000).toFixed(2) + ' B'
    } else if (population >= 1_000_000) {
        return (population / 1_000_000).toFixed(2) + ' M'
    } else if (population >= 1_000) {
        return (population / 1_000).toFixed(2) + ' K'
    } else {
        return `${population}`
    }
}