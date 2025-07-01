export default function getDailyId():string{
    return new Date().toISOString().slice(0, 10);
}