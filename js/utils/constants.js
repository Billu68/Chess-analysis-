// Chess constants
const PIECES = {
    WHITE_PAWN: '♙',
    WHITE_KNIGHT: '♘',
    WHITE_BISHOP: '♗',
    WHITE_ROOK: '♖',
    WHITE_QUEEN: '♕',
    WHITE_KING: '♔',
    BLACK_PAWN: '♟',
    BLACK_KNIGHT: '♞',
    BLACK_BISHOP: '♝',
    BLACK_ROOK: '♜',
    BLACK_QUEEN: '♛',
    BLACK_KING: '♚'
};

const PIECE_VALUES = {
    '♙': 1, '♟': 1,
    '♘': 3, '♞': 3,
    '♗': 3, '♝': 3,
    '♖': 5, '♜': 5,
    '♕': 9, '♛': 9,
    '♔': 0, '♚': 0
};

const STARTING_POSITION = {
    'a8': '♜', 'b8': '♞', 'c8': '♝', 'd8': '♛', 'e8': '♚', 'f8': '♝', 'g8': '♞', 'h8': '♜',
    'a7': '♟', 'b7': '♟', 'c7': '♟', 'd7': '♟', 'e7': '♟', 'f7': '♟', 'g7': '♟', 'h7': '♟',
    'a2': '♙', 'b2': '♙', 'c2': '♙', 'd2': '♙', 'e2': '♙', 'f2': '♙', 'g2': '♙', 'h2': '♙',
    'a1': '♖', 'b1': '♘', 'c1': '♗', 'd1': '♕', 'e1': '♔', 'f1': '♗', 'g1': '♘', 'h1': '♖'
};

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANKS = ['1', '2', '3', '4', '5', '6', '7', '8'];

const MOVE_ASSESSMENTS = {
    BRILLIANT: 'brilliant',
    GREAT: 'great',
    BEST: 'best',
    EXCELLENT: 'excellent',
    GOOD: 'good',
    INACCURACY: 'inaccuracy',
    MISTAKE: 'mistake',
    BLUNDER: 'blunder'
};

const SAMPLE_GAME = [
    { move: 'e2e4', eval: 0.35, assessment: 'best' },
    { move: 'e7e5', eval: 0.38, assessment: 'good' },
    { move: 'g1f3', eval: 0.42, assessment: 'best' },
    { move: 'b8c6', eval: 0.45, assessment: 'good' },
    { move: 'f1b5', eval: 0.38, assessment: 'best' },
    { move: 'a7a6', eval: 0.32, assessment: 'good' },
    { move: 'b5a4', eval: 0.28, assessment: 'best' },
    { move: 'g8f6', eval: 0.25, assessment: 'excellent' },
    { move: 'e1g1', eval: 0.22, assessment: 'best' },
    { move: 'f8e7', eval: 0.20, assessment: 'good' }
];

const EVALUATION_COLORS = {
    blunder: '#e53935',
    mistake: '#f4b400',
    inaccuracy: '#ffb74d',
    good: '#81b64c',
    best: '#4caf50',
    brilliant: '#1de9b6'
};