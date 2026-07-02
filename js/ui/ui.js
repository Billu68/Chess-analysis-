class UIManager {
    constructor() {
        this.board = new ChessBoard();
        this.moveManager = new MoveManager(this.board);
        this.analysis = new AnalysisEngine();
        this.isPlaying = false;
        this.initializeUI();
        this.attachEventListeners();
    }

    initializeUI() {
        this.generateCoordinates();
        this.updateMoveList();
        this.updateGameInfo();
    }

    generateCoordinates() {
        const hCoords = document.querySelector('.coordinates-h');
        const vCoords = document.querySelector('.coordinates-v');
        
        hCoords.innerHTML = FILES.map(f => `<span>${f}</span>`).join('');
        vCoords.innerHTML = RANKS.map(r => `<span>${r}</span>`).join('');
    }

    updateMoveList() {
        const moveList = document.getElementById('moveList');
        moveList.innerHTML = '';
        
        SAMPLE_GAME.forEach((move, index) => {
            const moveEl = document.createElement('div');
            moveEl.className = 'move-item';
            if (index === this.moveManager.currentIndex) {
                moveEl.classList.add('active');
            }
            moveEl.textContent = `${index + 1}. ${move.move}`;
            moveEl.addEventListener('click', () => this.moveManager.goToMove(index));
            moveList.appendChild(moveEl);
        });
    }

    updateGameInfo() {
        const moveNumber = document.getElementById('moveNumber');
        const totalMoves = this.moveManager.getMoveCount();
        const currentMove = this.moveManager.currentIndex + 1;
        moveNumber.textContent = `Move ${currentMove}/${totalMoves}`;
    }

    attachEventListeners() {
        // Navigation controls
        document.getElementById('firstBtn').addEventListener('click', () => {
            this.moveManager.firstMove();
            this.updateUI();
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            this.moveManager.previousMove();
            this.updateUI();
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            this.moveManager.nextMove();
            this.updateUI();
        });

        document.getElementById('lastBtn').addEventListener('click', () => {
            this.moveManager.lastMove();
            this.updateUI();
        });

        document.getElementById('playBtn').addEventListener('click', () => {
            this.togglePlayback();
        });

        document.getElementById('pauseBtn').addEventListener('click', () => {
            this.togglePlayback();
        });

        document.getElementById('flipBoardBtn').addEventListener('click', () => {
            this.board.flipBoard();
        });

        document.getElementById('settingsBtn').addEventListener('click', () => {
            this.showSettings();
        });

        document.getElementById('closeSettingsBtn').addEventListener('click', () => {
            this.hideSettings();
        });

        document.getElementById('applySettingsBtn').addEventListener('click', () => {
            this.applySettings();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
    }

    togglePlayback() {
        this.isPlaying = !this.isPlaying;
        const playBtn = document.getElementById('playBtn');
        const pauseBtn = document.getElementById('pauseBtn');
        
        if (this.isPlaying) {
            playBtn.classList.add('hidden');
            pauseBtn.classList.remove('hidden');
            this.moveManager.playGame(1500);
        } else {
            playBtn.classList.remove('hidden');
            pauseBtn.classList.add('hidden');
            this.moveManager.stopAutoPlay();
        }
    }

    handleKeyboardShortcuts(e) {
        switch(e.key) {
            case 'ArrowLeft':
                this.moveManager.previousMove();
                this.updateUI();
                break;
            case 'ArrowRight':
                this.moveManager.nextMove();
                this.updateUI();
                break;
            case ' ':
                e.preventDefault();
                this.togglePlayback();
                break;
            case 'Home':
                this.moveManager.firstMove();
                this.updateUI();
                break;
            case 'End':
                this.moveManager.lastMove();
                this.updateUI();
                break;
            case 'f':
            case 'F':
                this.board.flipBoard();
                break;
        }
    }

    showSettings() {
        document.getElementById('settingsModal').classList.remove('hidden');
    }

    hideSettings() {
        document.getElementById('settingsModal').classList.add('hidden');
    }

    applySettings() {
        const boardSize = document.getElementById('boardSize').value;
        document.getElementById('boardSizeValue').textContent = boardSize + 'px';
        document.querySelector('.chessboard').style.width = boardSize + 'px';
        document.querySelector('.chessboard').style.height = boardSize + 'px';
        this.hideSettings();
    }

    updateUI() {
        this.updateMoveList();
        this.updateGameInfo();
    }
}