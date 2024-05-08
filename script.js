ocument.addEventListener('DOMContentLoaded', function() {
    const squares = document.getElementsByClassName('square');

    // Add event listener for 'mouseover' event to each square
    Array.from(squares).forEach(square => {
        square.addEventListener('mouseover', function() {
            // Change the color of non-hovered squares to Coffee
            Array.from(squares).forEach(s => {
                if (s !== square) {
                    s.style.backgroundColor = '#6F4E37'; // Coffee
                }
            });
        });

        // Add event listener for 'mouseout' event to each square
        square.addEventListener('mouseout', function() {
            // Change the color of non-hovered squares back to Lavender
            Array.from(squares).forEach(s => {
                if (s !== square) {
                    s.style.backgroundColor = '#E6E6FA'; // Lavender
                }
            });
        });
    });
	   });
