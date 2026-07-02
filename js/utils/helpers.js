// Helper functions

function squareToCoords(square) {
    const file = square.charCodeAt(0) - 97;
    const rank = parseInt(square[1]) - 1;
    return { file, rank };
}

function coordsToSquare(file, rank) {
    return String.fromCharCode(97 + file) + (rank + 1);
}

function isValidSquare(file, rank) {
    return file >= 0 && file < 8 && rank >= 0 && rank < 8;
}

function isWhitePiece(piece) {
    return piece && piece.charCodeAt(0) < 9823;
}

function isBlackPiece(piece) {
    return piece && piece.charCodeAt(0) >= 9823;
}

function getPieceColor(piece) {
    return isWhitePiece(piece) ? 'white' : 'black';
}

function formatEval(eval) {
    if (eval > 0) return '+' + eval.toFixed(2);
    return eval.toFixed(2);
}

function getSquareColor(file, rank) {
    return (file + rank) % 2 === 0 ? 'light' : 'dark';
}

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function getAngle(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
}