class MoveManager {
    constructor(board) {
        this.board = board;
        this.moves = SAMPLE_GAME;
        this.currentIndex = -1;
    }

    playGame(speed = 1000) {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            if (this.currentIndex < this.moves.length - 1) {
                this.nextMove();
            } else {
                clearInterval(this.autoPlayInterval);
            }
        }, speed);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    nextMove() {
        if (this.currentIndex < this.moves.length - 1) {
            this.currentIndex++;
            const move = this.moves[this.currentIndex];
            this.board.makeMove(move.move.slice(0, 2), move.move.slice(2));
        }
    }

    previousMove() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.board.undoMove();
        }
    }

    firstMove() {
        while (this.currentIndex > 0) {
            this.previousMove();
        }
    }

    lastMove() {
        while (this.currentIndex < this.moves.length - 1) {
            this.nextMove();
        }
    }

    goToMove(index) {
        if (index >= 0 && index < this.moves.length) {
            while (this.currentIndex < index) {
                this.nextMove();
            }
            while (this.currentIndex > index) {
                this.previousMove();
            }
        }
    }

    getMoveNotation(from, to) {
        return from + to;
    }

    getCurrentMove() {
        return this.currentIndex >= 0 ? this.moves[this.currentIndex] : null;
    }

    getMoveCount() {
        return this.moves.length;
    }
}