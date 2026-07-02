class ChessBoard {
    constructor() {
        this.position = { ...STARTING_POSITION };
        this.flipped = false;
        this.lastMove = null;
        this.selectedSquare = null;
        this.legalMoves = [];
        this.moveHistory = [];
        this.currentMoveIndex = -1;
        this.initializeBoard();
    }

    initializeBoard() {
        const boardEl = document.getElementById('chessboard');
        boardEl.innerHTML = '';
        
        for (let rank = 7; rank >= 0; rank--) {
            for (let file = 0; file < 8; file++) {
                const square = document.createElement('div');
                const displayFile = this.flipped ? 7 - file : file;
                const displayRank = this.flipped ? rank : 7 - rank;
                const squareName = coordsToSquare(displayFile, displayRank);
                
                square.className = `square ${getSquareColor(displayFile, displayRank)}`;
                square.dataset.square = squareName;
                
                const piece = this.position[squareName];
                if (piece) {
                    const pieceEl = document.createElement('div');
                    pieceEl.className = 'piece';
                    pieceEl.textContent = piece;
                    square.appendChild(pieceEl);
                }
                
                square.addEventListener('click', () => this.selectSquare(squareName));
                boardEl.appendChild(square);
            }
        }
    }

    selectSquare(square) {
        if (this.selectedSquare === square) {
            this.clearSelection();
            return;
        }

        const piece = this.position[square];
        
        if (this.selectedSquare) {
            if (this.isLegalMove(this.selectedSquare, square)) {
                this.makeMove(this.selectedSquare, square);
            }
            this.clearSelection();
        } else if (piece) {
            this.selectedSquare = square;
            this.legalMoves = this.getLegalMoves(square);
            this.updateBoardDisplay();
        }
    }

    isLegalMove(from, to) {
        return this.legalMoves.includes(to);
    }

    getLegalMoves(square) {
        const moves = [];
        const piece = this.position[square];
        if (!piece) return moves;

        const { file, rank } = squareToCoords(square);
        // Simplified legal moves - in production use chess.js or similar
        return moves;
    }

    makeMove(from, to) {
        const piece = this.position[from];
        this.position[to] = piece;
        delete this.position[from];
        this.lastMove = { from, to };
        this.moveHistory.push({ from, to, piece });
        this.currentMoveIndex = this.moveHistory.length - 1;
        this.updateBoardDisplay();
    }

    undoMove() {
        if (this.moveHistory.length === 0) return;
        const move = this.moveHistory.pop();
        this.position[move.from] = move.piece;
        delete this.position[move.to];
        this.lastMove = null;
        this.currentMoveIndex = this.moveHistory.length - 1;
        this.updateBoardDisplay();
    }

    flipBoard() {
        this.flipped = !this.flipped;
        this.initializeBoard();
    }

    clearSelection() {
        this.selectedSquare = null;
        this.legalMoves = [];
        this.updateBoardDisplay();
    }

    updateBoardDisplay() {
        document.querySelectorAll('.square').forEach(square => {
            square.classList.remove('highlight', 'last-move', 'check');
            
            if (square.dataset.square === this.selectedSquare) {
                square.classList.add('highlight');
            }
            
            if (this.legalMoves.includes(square.dataset.square)) {
                square.classList.add('highlight');
            }
            
            if (this.lastMove && 
                (square.dataset.square === this.lastMove.from || 
                 square.dataset.square === this.lastMove.to)) {
                square.classList.add('last-move');
            }
        });
    }
}