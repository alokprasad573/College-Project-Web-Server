
// By home tag in navigation-bar
document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'landing-page.html'; // Redirect to landing-page.html
});

//sign-in button
document.getElementById('signInButton').addEventListener('click', function () {
    window.location.href = 'sign-in.html';
});

// cancel button
document.getElementById('button-cancel').addEventListener('click', function() {
    window.location.href = 'sign-up-region.html';
});

//Continue button button
document.getElementById('button-continue-password').addEventListener('click', function() {
    window.location.href = 'sign-up-password.html';
});

// categories
document.addEventListener("DOMContentLoaded", function() {
    // Select the link element by its ID
    let categories = document.getElementById("categoriesLink");

    // Set the href attribute to the desired URL
    categories.href = "category_landing_page.html";
});