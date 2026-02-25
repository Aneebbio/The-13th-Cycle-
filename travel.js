import { Manifest } from './data.js';
import { Whisper } from './whisper.js';

export const Travel = {
    current: 'shack',
    unlocked: ['shack'],

    warp(planetId) {
        const overlay = document.getElementById('warp-overlay');
        overlay.classList.add('active');
        Whisper.say("Bending reality...");

        setTimeout(() => {
            this.current = planetId;
            if (!this.unlocked.includes(planetId)) this.unlocked.push(planetId);
            overlay.classList.remove('active');
            this.loadPlanet(planetId);
        }, 3000);
    },

    loadPlanet(id) {
        const planet = Manifest.planets[id];
        document.getElementById('planet-name').innerText = planet.name;
        document.body.className = planet.theme;
        
        const zone = document.getElementById('mining-zone');
        zone.innerHTML = planet.ores.map(ore => 
            `<button class="mine-btn" onclick="window.mine('${ore}')">Extract ${ore}</button>`
        ).join('');
    }
};
