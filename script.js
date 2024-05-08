document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('.square');

    // Function to change the color of non-hovered squares to Coffee
    function changeColorToCoffee(square) {
        squares.forEach(s => {
            if (s !== square) {
                s.style.backgroundColor = '#6F4E37'; // Coffee
            }
        });
    }

    // Function to reset the color of non-hovered squares to Lavender
    function resetColorToLavender(square) {
        squares.forEach(s => {
            if (s !== square) {
                s.style.backgroundColor = '#E6E6FA'; // Lavender
            }
        });
    }

    // Add event listener to each square
    squares.forEach(square => {
        square.addEventListener('mouseenter', function() {
            changeColorToCoffee(square);
        });

        square.addEventListener('mouseleave', function() {
            resetColorToLavender(square);
        });
    });
});
