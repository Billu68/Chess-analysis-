class EvaluationGraph {
    constructor() {
        this.svg = document.getElementById('graphSvg');
        this.line = document.getElementById('evaluationLine');
        this.evaluations = SAMPLE_GAME.map(m => m.eval);
        this.drawGraph();
        this.attachInteractivity();
    }

    drawGraph() {
        const width = 600;
        const height = 200;
        const padding = 10;
        const graphHeight = height - 2 * padding;
        
        const max = Math.max(...this.evaluations, 1);
        const min = Math.min(...this.evaluations, -1);
        const range = max - min || 1;
        
        const points = this.evaluations.map((eval, i) => {
            const x = (width / (this.evaluations.length - 1 || 1)) * i;
            const y = height - (((eval - min) / range) * graphHeight) - padding;
            return `${x},${y}`;
        }).join(' ');
        
        this.line.setAttribute('points', points);
    }

    attachInteractivity() {
        this.svg.addEventListener('mousemove', (e) => this.showTooltip(e));
        this.svg.addEventListener('mouseleave', () => this.hideTooltip());
    }

    showTooltip(e) {
        const rect = this.svg.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const index = Math.round((x / rect.width) * (this.evaluations.length - 1));
        
        if (index >= 0 && index < this.evaluations.length) {
            const tooltip = document.getElementById('graphTooltip');
            document.getElementById('tooltipMove').textContent = `Move ${index + 1}`;
            document.getElementById('tooltipEval').textContent = formatEval(this.evaluations[index]);
            
            tooltip.style.left = (e.clientX - rect.left) + 'px';
            tooltip.style.top = (e.clientY - rect.top) + 'px';
            tooltip.style.display = 'block';
        }
    }

    hideTooltip() {
        document.getElementById('graphTooltip').style.display = 'none';
    }
}