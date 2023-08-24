document.addEventListener("DOMContentLoaded", function () {
    // Get the "Watch Now" button element
    const watchNowButton = document.querySelector(".cta-button");

    // Add a click event listener to the button
    watchNowButton.addEventListener("click", function () {
        // Redirect the user to the YouTube video link
        window.location.href = "https://www.youtube.com/watch?v=g_U0bF41ZNo";
    });
});
