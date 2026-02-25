import { Inventory } from './inventory.js';
import { Travel } from './travel.js';
import { Crafting } from './crafting.js';
import { Whisper } from './whisper.js';
import { Manifest } from './data.js';
import { GameState } from './state.js';

/** * 1. GLOBAL BINDINGS
 * These allow your HTML buttons (onclick) to find the functions.
 */
window.mine = (id) => {
    // Add the resource to inventory
    Inventory.add(id, 1);
    
    // Save the game state locally
    GameState.save();

    // The 13th's influence grows with every click
    if (Inventory.items.memory > 0 && Inventory.items.memory % 15 === 0) {
        Whisper.say("Your memories... they taste like copper and static.");
    }
};

window.showDetails = (id) => Crafting.showDetails(id);

window.build = (id) => {
    const item = Manifest.blueprints[id];
    const canAfford = Object.entries(item.cost).every(([res, qty]) => Inventory.has(res, qty));
    
    if (canAfford) {
        Inventory.spend(item.cost);
        Whisper.say(`${item.name} constructed. The Station expands.`);
        
        // If the item unlocks a new planet, warp there
        if (item.unlocks) Travel.warp(item.unlocks);
        
        // Refresh the crafting UI
        Crafting.showDetails(id); 
    } else {
        Whisper.say("The laws of physics require more materials.");
    }
};

/**
 * 2. UI NAVIGATION
 */
window.UI = {
    switchTab(id) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(t => {
            t.style.display = 'none';
        });
        
        // Show the selected tab
        const activeTab = document.getElementById(`tab-${id}`);
        if (activeTab) {
            activeTab.style.display = 'block';
        }

        // Special handling for Crafting tab to render buttons
        if (id === 'crafting') {
            Crafting.renderMenu();
        }
    }
};

/**
 * 3. INITIALIZATION
 * Runs when the page first loads.
 */
window.onload = () => {
    console.log("Infinity Station v69.Q Online.");
    
    // Set default tab
    window.UI.switchTab('mining');
    
    // Load the starting planet (The Shack)
    Travel.loadPlanet('shack');
    
    // Update inventory display immediately in case of existing save
    Inventory.updateUI();
};
