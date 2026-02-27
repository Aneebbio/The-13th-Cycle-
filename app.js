import { player_state } from './player_state.js';
import { map_layout } from './maps/map_layout.js';
import { save_manager } from './system/save_manager.js';

const app = {
    init() {
        save_manager.load();
        this.switchTab('explore'); // Set initial view
        setInterval(() => this.gameLoop(), 1000);
        this.render();
    },

    switchTab(tabId) {
        // 1. Toggle View Visibility
        document.querySelectorAll('.tab-view').forEach(v => v.style.display = 'none');
        document.getElementById(`view-${tabId}`).style.display = 'block';

        // 2. Highlight active Top Tab
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.innerText.toLowerCase() === tabId);
        });

        // 3. Update Left Sub-Tabs based on selection
        this.renderSubTabs(tabId);
    },

    renderSubTabs(tabId) {
        const container = document.getElementById('sub-tabs-content');
        if (tabId === 'explore') {
            container.innerHTML = `
                <button onclick="console.log('Scanner active')">RADAR SCAN</button>
                <button onclick="console.log('Warp active')">WARP DRIVE</button>
            `;
        } else if (tabId === 'base') {
            container.innerHTML = `
                <button onclick="console.log('Building power')">POWER GRID</button>
                <button onclick="console.log('Building mining')">EXTRACTORS</button>
            `;
        } else {
            container.innerHTML = `<p style="color:#333; font-size:0.8em;">No actions available.</p>`;
        }
    },

    gameLoop() {
        if (player_state.stats.oxygen > 0) player_state.stats.oxygen -= 0.05;
        this.updateVitals();
    },

    updateVitals() {
        document.getElementById('stat-oxy').innerText = Math.floor(player_state.stats.oxygen);
        document.getElementById('stat-eng').innerText = Math.floor(player_state.stats.energy);
    },

    render() {
        this.updateVitals();
        // Here is where you would call map_renderer.render()
    }
};

// Globalize for HTML onclicks
window.switchTab = (id) => app.switchTab(id);
window.saveGame = () => save_manager.save();

app.init();
