class AnalysisEngine {
    constructor() {
        this.evaluations = SAMPLE_GAME.map(m => m.eval);
        this.assessments = SAMPLE_GAME.map(m => m.assessment);
    }

    getEvaluation(moveIndex) {
        return this.evaluations[moveIndex] || 0;
    }

    getAssessment(moveIndex) {
        return this.assessments[moveIndex] || 'good';
    }

    getAccuracy(color) {
        // Simulate accuracy calculation
        return color === 'white' ? 70.9 : 75.9;
    }

    getExplanation(moveIndex) {
        const explanations = {
            0: {
                title: 'King\'s Pawn Opening',
                positive: 'Controls the center immediately and opens lines for your queen and bishop.',
                negative: 'None - this is the classical opening.',
                strategy: 'Dominates central squares while allowing active piece development.',
                tactic: 'Prepare for rapid development.'
            },
            1: {
                title: 'Symmetric Defense',
                positive: 'Maintains central tension and mirrors white\'s control.',
                negative: 'None - solid response.',
                strategy: 'Establishes central control symmetrically.',
                tactic: 'Ready to develop pieces actively.'
            }
        };
        return explanations[moveIndex] || null;
    }

    getBestMoves(moveIndex) {
        return [
            { move: 'e2e4', eval: 0.35 },
            { move: 'd2d4', eval: 0.33 },
            { move: 'c2c4', eval: 0.28 }
        ];
    }

    getMoveStats() {
        return {
            brilliant: 2,
            great: 5,
            best: 8,
            good: 12,
            inaccuracy: 3,
            mistake: 2,
            blunder: 1,
            acl: 25
        };
    }
}