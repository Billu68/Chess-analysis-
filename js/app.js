// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    // Create UI manager
    const uiManager = new UIManager();
    
    // Create control manager
    const controlManager = new ControlManager(uiManager);
    window.controlManager = controlManager;
    
    // Create evaluation graph
    const graph = new EvaluationGraph();
    
    // Add canvas for arrows
    const boardWrapper = document.querySelector('.board-wrapper');
    const canvas = document.getElementById('arrowCanvas');
    const chessboard = document.getElementById('chessboard');
    
    canvas.width = chessboard.offsetWidth;
    canvas.height = chessboard.offsetHeight;
    
    // Update canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = chessboard.offsetWidth;
        canvas.height = chessboard.offsetHeight;
    });
    
    // Close modal on overlay click
    document.querySelector('.modal-overlay').addEventListener('click', () => {
        uiManager.hideSettings();
    });
    
    // Prevent context menu on chessboard
    chessboard.addEventListener('contextmenu', (e) => e.preventDefault());
    
    console.log('ChessMaster Pro initialized successfully!');
});