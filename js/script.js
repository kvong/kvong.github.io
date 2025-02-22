const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle( "dark" );

    // Change the button text based on mode
    if (document.documentElement.classList.contains('dark')) {
        toggleButton.textContent = 'Toggle Light Mode';
    } else {
        toggleButton.textContent = 'Toggle Dark Mode';
    }
});
