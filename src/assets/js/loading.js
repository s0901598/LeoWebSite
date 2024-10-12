function createStars() {
    const container = document.querySelector('.loader-container');
    for (let i = 0; i < 40; i++) { // Reduced number of stars
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2.5}s`;
        container.appendChild(star);
    }
}

function createPlanets() {
    const container = document.querySelector('.loader-container');
    const colors = ['#ff9999', '#99ff99', '#9999ff'];
    for (let i = 0; i < 3; i++) {
        const planet = document.createElement('div');
        planet.className = 'planet';
        planet.style.backgroundColor = colors[i];
        planet.style.animationDelay = `${i * -2.5}s`;
        container.appendChild(planet);
    }
}