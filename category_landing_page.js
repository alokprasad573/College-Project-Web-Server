// sign in page
document.getElementById('signInButton').addEventListener('click', function () {
    window.location.href = 'sign-in.html';
});

// home-page
document.getElementById('homeLink').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'landing-page.html'; // Redirect to landing-page.html
});

function navigateToLogin() {
    window.location.href = 'sign-in.html';
}

function navigateToSignUp() {
    window.location.href = 'sign-up-region.html';
}

//  // Select the anchor element by its ID
const categoriesLink = document.getElementById('categoriesLink');

// Set the href attribute to link to categories_landing_page
categoriesLink.href = 'categories_landing_page.html';