document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('.square');

    // Add event listener to each square
    squares.forEach(square => {
        square.addEventListener('mouseenter', function() {
            // Change the color of non-hovered squares to Coffee
            squares.forEach(s => {
                if (s !== square) {
                    s.style.backgroundColor = '#6F4E37'; // Coffee
                }
            });
        });

        // Reset color of non-hovered squares to Lavender when cursor leaves the square
        square.addEventListener('mouseleave', function() {
            squares.forEach(s => {
                if (s !== square) {
                    s.style.backgroundColor = '#E6E6FA'; // Lavender
                }
            });
        });
    });
});
