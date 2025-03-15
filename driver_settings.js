document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // Store the theme preference in local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference on page load
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    // You would typically use a localization library or mechanism here
    // For this example, we'll just log the selected language to the console
    console.log('Selected language:', selectedLanguage);
    // Here, language change functionality will be triggered
});

function reportIssue() {
    // Implement report issue functionality here
    alert('Report an Issue clicked!');
}

function contactUs() {
    // Implement contact us functionality here
    alert('Contact Us clicked!');
}

function rateUs() {
    // Implement rate us functionality here
    alert('Rate Us on Play Store clicked!');
}
