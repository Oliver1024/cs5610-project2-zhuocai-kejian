
export class Containers {
    positions = {
        sheep: [2, 2],
        pig: [5, 5],
        cow: [6, 6]
    }

    movePosition(name, toX, toY) {
        this.positions[name] = [toX, toY]
    }
}