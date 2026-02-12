document.addEventListener('keydown', function(event) {
    const key = event.key;
    const body = document.querySelector('body');
    const path = window.location.pathname;
    const filename = path.split('/').pop().toLowerCase(); // e.g., "slide6.html"

    let currentSlideNum = 0;
    
    if (filename === 'index.html' || filename === '') {
        currentSlideNum = 1;
    } else {
        const match = filename.match(/slide(\d+)\.html/);
        if (match) {
            currentSlideNum = parseInt(match[1], 10);
        }
    }

    if (key === 'ArrowRight' || key === 'ArrowDown' || key === ' ') {
        // Next Slide
        let nextSlideNum = currentSlideNum + 1;
        let nextSlideFile = `Slide${nextSlideNum}.html`;
        
        // Check if we are at the last slide (assuming 10 slides for now)
        if (currentSlideNum >= 10) {
            return; // Stay on last slide
        }
        
        // Navigate
        window.location.href = nextSlideFile;
        
    } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
        // Previous Slide
        let prevSlideNum = currentSlideNum - 1;
        let prevSlideFile = '';

        if (prevSlideNum < 1) {
            return; // Stay on first slide or index
        }

        if (prevSlideNum === 1) {
            prevSlideFile = 'Index.html';
        } else {
            prevSlideFile = `Slide${prevSlideNum}.html`;
        }

        // Navigate
        window.location.href = prevSlideFile;
    }
});
