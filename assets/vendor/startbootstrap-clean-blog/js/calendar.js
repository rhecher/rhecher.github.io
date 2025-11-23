function resizeCalendar() {
    const iframe = document.getElementById('myCalendar');
    const wrapper = iframe.parentElement;
    const width = window.innerWidth;
    let paddingBottom;

    // Verhältnis je nach Gerät
    if (width >= 1024) {
        paddingBottom = (3/4) * 100; // Desktop 4:3
    } else if (width >= 768) {
        paddingBottom = (9/16) * 100; // Tablet 16:9
    } else {
        paddingBottom = 100; // Handy 1:1
    }

    // Höhe auf max. 90% der Fensterhöhe begrenzen
    const newHeight = Math.min(window.innerHeight * 0.9, wrapper.offsetWidth * (paddingBottom / 100));
    wrapper.style.paddingBottom = (newHeight / wrapper.offsetWidth) * 100 + '%';
}

// Eventlistener
window.addEventListener('resize', resizeCalendar);
window.addEventListener('load', resizeCalendar);
