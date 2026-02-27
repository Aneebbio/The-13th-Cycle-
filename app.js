import { Gamedata } from './main_registry.js';
import { player_state } from './player_state.js';
import { save_manager } from './system/save_manager.js';

const app = {
    init() {
        console.log("Initializing The 13th Cycle...");
        
        // 1. Try to load existing save
        save_manager.load();

        // 2. Start the Game Loop (Ticks every 1 second)
        setInterval(() => this.gameLoop(), 1000);

        // 3. Initial Render
        this.updateUI();
    },

    gameLoop() {
        // Logic: Consume Oxygen
        if (player_state.stats.oxygen > 0) {
            player_state.stats.oxygen -= 0.1;
        }

        // Logic: Generate Power (if structures exist)
        // (This is where your windmill logic would go)

        this.updateUI();
    },

    updateUI() {
        // Update Vitals
        document.getElementById('stat-oxy').innerText = Math.floor(player_state.stats.oxygen);
        document.getElementById('stat-eng').innerText = Math.floor(player_state.stats.energy);

        // Update Resources Sidebar
        const resList = document.getElementById('res-list');
        resList.innerHTML = Object.entries(player_state.inventory)
            .map(([item, qty]) => `<div>${item}: ${qty}</div>`)
            .join('');
    }
};

// Global Save function for the HTML button
window.saveGame = () => save_manager.save();

// Start
app.init();
