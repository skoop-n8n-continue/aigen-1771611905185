document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World App Loaded');
    
    // Add a subtle pulse to the accent bar
    const accentBar = document.querySelector('.accent-bar');
    if (accentBar) {
        accentBar.animate([
            { opacity: 0.6, transform: 'scaleX(0.8)' },
            { opacity: 1, transform: 'scaleX(1.1)' },
            { opacity: 0.6, transform: 'scaleX(0.8)' }
        ], {
            duration: 3000,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    }

    // Cache busting helper for any dynamic assets if needed in future
    const getVersionedUrl = (url) => {
        const separator = url.includes('?') ? '&' : '?';
        return `${url}${separator}v=${Date.now()}`;
    };
});
