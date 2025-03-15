document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
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
