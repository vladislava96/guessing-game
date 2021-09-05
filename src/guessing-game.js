class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.gameMin = min, // 1
        this.gameMax = max // 10 // 5
    }

    guess() {
        this.result = Math.round(this.gameMin + (this.gameMax - this.gameMin) / 2); // 5 // 1 + (5 - 1) / 2 = 3;
        return this.result; // 5 // 3
    }

    lower() {
        // (4)
        // 1 --- 10
        // 5     (5 > 4)
        this.gameMax = this.result; // 5
    }

    greater() {
        // (4)
        // 1 --- 5
        // 3     (3 < 4)
        this.gameMin = this.result; // 3
    }
}

module.exports = GuessingGame;