document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Get all "Next" and "Previous" buttons
    const nextButtons = document.querySelectorAll('.next-section-button');
    const prevButtons = document.querySelectorAll('.prev-section-button');

    // Function to handle click on navigation links
    function handleNavLinkClick(event) {
        event.preventDefault();

        // Get the target section id from the href attribute
        const targetSectionId = event.target.getAttribute('href').substring(1);

        // Find the target section
        const targetSection = document.getElementById(targetSectionId);

        // Scroll to the target section smoothly
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Optional: Add 'active' class to the target section
            updateActiveClass(targetSection);
        }
    }

    // Function to handle click on "Next" and "Previous" buttons
    function handleButtonClick(event, isNext) {
        event.preventDefault();

        // Find the current section
        const currentSection = event.target.closest('section');

        // Determine the next or previous section
        const targetSection = isNext ? currentSection.nextElementSibling : currentSection.previousElementSibling;

        // Scroll to the target section smoothly
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Optional: Add 'active' class to the target section
            updateActiveClass(targetSection);
        }
    }

    // Function to update the 'active' class
    function updateActiveClass(targetSection) {
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        targetSection.classList.add('active');
    }

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });

    // Add click event listener to each "Next" button
    nextButtons.forEach(button => {
        button.addEventListener('click', (event) => handleButtonClick(event, true));
    });

    // Add click event listener to each "Previous" button
    prevButtons.forEach(button => {
        button.addEventListener('click', (event) => handleButtonClick(event, false));
    });

    // Scroll to the top of the page when the page is refreshed
    window.addEventListener('beforeunload', function () {
        window.scrollTo(0, 0);
    });

    // Scroll to the first section by default
    const defaultSection = document.getElementById('apa-itu-seni-ragam');
    if (defaultSection) {
        defaultSection.scrollIntoView({ behavior: 'smooth' });
        updateActiveClass(defaultSection);
    }
});
