document.addEventListener('DOMContentLoaded', function() {
    const squares = document.getElementsByClassName('square');

    // Add event listener for 'mouseover' event to each square
    Array.from(squares).forEach(square => {
        square.addEventListener('mouseover', function() {
            // Change the color of all squares to Coffee
            Array.from(squares).forEach(s => {
                s.style.backgroundColor = '#6F4E37'; // Coffee
            });
        });

        // Add event listener for 'mouseout' event to each square
        square.addEventListener('mouseout', function() {
            // Change the color of all squares back to Lavender
            Array.from(squares).forEach(s => {
                s.style.backgroundColor = '#E6E6FA'; // Lavender
            });
        });
    });
});
