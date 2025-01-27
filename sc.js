document.addEventListener("DOMContentLoaded", function () {
    // Select the dark mode toggle button
    const toggleButton = document.getElementById("toggle-button");

    // Add a click event listener to toggle dark mode
    toggleButton.addEventListener("click", function () {
        // Toggle the "dark-mode" class on the body element
        const body = document.body;
        body.classList.toggle("dark-mode");

        // Update the button text based on the current mode
        if (body.classList.contains("dark-mode")) {
            toggleButton.textContent = "Light Mode";
        } else {
            toggleButton.textContent = "Dark Mode";
        }
    });
});
