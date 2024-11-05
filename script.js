document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.section');

    // Function to determine threshold based on screen width
    function getThreshold() {
        return window.innerWidth < 768 ? 0.3 : 0.9; // Assuming 768px as mobile breakpoint
    }

    // Create the observer with the threshold based on current screen width
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: getThreshold() }); // Use the dynamic threshold

    sections.forEach(function(section) {
        observer.observe(section);
    });

    // Optional: Update observer if the window is resized
    window.addEventListener('resize', function() {
        // If the threshold needs to change on resize, you can re-create the observer
        observer.disconnect(); // Disconnect previous observer
        observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: getThreshold() }); // Get the new threshold
        
        sections.forEach(function(section) {
            observer.observe(section); // Re-observe the sections
        });
    });
});


function toggleMenu(button) {
            button.classList.toggle("change");
            document.querySelector('.nav').classList.toggle('show');
        }