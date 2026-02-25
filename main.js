import { Inventory } from './inventory.js';
import { Travel } from './travel.js';
import { Crafting } from './crafting.js';
import { Whisper } from './whisper.js';
import { Manifest } from './data.js';

// Attaching functions to window for HTML access
window.mine = (id) => Inventory.add(id, 1);
window.showDetails = (id) => Crafting.showDetails(id);
window.build = (id) => {
    const item = Manifest.blueprints[id];
    const canAfford = Object.entries(item.cost).every(([res, qty]) => Inventory.has(res, qty));
    
    if (canAfford) {
        Inventory.spend(item.cost);
        Whisper.say(`${item.name} online.`);
        if (item.unlocks) Travel.warp(item.unlocks);
        Crafting.showDetails(id); // Refresh panel
    } else {
        Whisper.say("Lack of materials.");
    }
};

window.UI = {
    switchTab(id) {
        document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
        document.getElementById(`tab-${id}`).style.display = 'block';
        if (id === 'crafting') Crafting.renderMenu();
    }
};

window.onload = () => {
    window.UI.switchTab('mining');
    Travel.loadPlanet('shack');
};
