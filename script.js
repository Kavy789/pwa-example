let deferredPrompt;
const installBtn = document.getElementById('installBtn');

// Listen for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the default prompt from appearing
    e.preventDefault();
    deferredPrompt = e;

    // Show the install button
    installBtn.style.display = 'block';

    // Handle the click event on the install button
    installBtn.addEventListener('click', () => {
        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null; // Reset the prompt
        });
    });
});

// Listen for the appinstalled event to confirm the app was installed
window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
});
