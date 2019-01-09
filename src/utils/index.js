export default function TimeUpdate(time) {
    if (!time) return '';
    let date = new Date(time);
    let Mouth = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    let Dates = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return date.getFullYear() + '-' + Mouth + '-' + Dates;
}