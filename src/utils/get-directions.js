export function getDirection(angle) {
    let directions = ["North", "North-West", "West", "South-West", "South", "South-East", "East", "North-East"];
    let index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
    return directions[index];
}