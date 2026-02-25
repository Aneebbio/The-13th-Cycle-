import { Whisper } from './whisper.js';

export const Inventory = {
    items: { memory: 0, iron: 0, copper: 0, titanium: 0, helium3: 0, ancient_gears: 0, star_plasma: 0, nothingness: 0 },

    add(id, qty) {
        if (this.items.hasOwnProperty(id)) {
            this.items[id] += qty;
            this.updateUI();
            if (id === 'nothingness' && this.items[id] >= 1000) Whisper.say("The end is near.");
        }
    },

    has(id, qty) { return this.items[id] >= qty; },

    spend(costs) {
        for (let [id, qty] of Object.entries(costs)) { this.items[id] -= qty; }
        this.updateUI();
    },

    updateUI() {
        const list = document.getElementById('resource-list');
        if (!list) return;
        list.innerHTML = Object.entries(this.items)
            .filter(([id, amt]) => amt > 0)
            .map(([id, amt]) => `<div class="res-item"><b>${id.toUpperCase()}:</b> ${Math.floor(amt)}</div>`).join('');
    }
};
