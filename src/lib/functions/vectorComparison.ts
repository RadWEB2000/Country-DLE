export default function vectorComparison(win: number, selected: number): ComparisonStatusVector {
    if (win === selected) return 'done'
    if (selected < win) return 'wrong-up';
    if (selected > win) return 'wrong-down';
    return 'wrong';
}