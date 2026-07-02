class PieceManager {
    constructor(board) {
        this.board = board;
    }

    getCapturedPieces() {
        const captured = { white: [], black: [] };
        const originalPieces = Object.values(STARTING_POSITION);
        const currentPieces = Object.values(this.board.position);
        
        originalPieces.forEach(piece => {
            if (!currentPieces.includes(piece)) {
                const color = isWhitePiece(piece) ? 'white' : 'black';
                captured[color].push(piece);
            }
        });
        
        return captured;
    }

    getMaterialDifference() {
        let whiteValue = 0, blackValue = 0;
        
        Object.values(this.board.position).forEach(piece => {
            const value = PIECE_VALUES[piece] || 0;
            if (isWhitePiece(piece)) {
                whiteValue += value;
            } else {
                blackValue += value;
            }
        });
        
        return {
            white: whiteValue,
            black: blackValue,
            difference: whiteValue - blackValue
        };
    }

    displayCapturedPieces() {
        // UI display logic
    }
}