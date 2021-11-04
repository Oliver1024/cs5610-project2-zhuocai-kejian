export class Game {
    boatPosition = [1, 7]
    observers = []
    observe(o) {
        this.observers.push(o)
        this.emitChange()
        return () => {
            this.observers = this.observers.filter((t) => t !== o)
        }
    }
    moveBoat(toX, toY) {
        this.boatPosition = [toX, toY]
        this.emitChange()
    }
    canMoveBoat(toX, toY) {
        const [x, y] = this.boatPosition
        const dx = toX - x
        const dy = toY - y
        return (
            (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
            (Math.abs(dx) === 1 && Math.abs(dy) === 2)
        )
    }
    emitChange() {
        const pos = this.boatPosition
        this.observers.forEach((o) => o && o(pos))
    }
}
