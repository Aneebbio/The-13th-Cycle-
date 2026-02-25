import { Manifest } from './data.js';
import { Inventory } from './inventory.js';
import { Travel } from './travel.js';
import { Whisper } from './whisper.js';

export const Crafting = {
    renderMenu() {
        const menu = document.getElementById('crafting-menu');
        menu.innerHTML = Object.entries(Manifest.blueprints).map(([id, item]) => 
            `<button class="small-tab-btn" onclick="window.showDetails('${id}')">${item.name}</button>`
        ).join('');
    },

    showDetails(id) {
        const item = Manifest.blueprints[id];
        const panel = document.getElementById('crafting-details');
        let costHtml = Object.entries(item.cost).map(([res, qty]) => {
            const ok = Inventory.has(res, qty);
            return `<li style="color:${ok ? '#2ecc71' : '#e74c3c'}">${res}: ${qty}</li>`;
        }).join('');

        panel.innerHTML = `
            <h3>${item.name}</h3>
            <ul>${costHtml}</ul>
            <button onclick="window.build('${id}')">Construct</button>
        `;
    }
};
