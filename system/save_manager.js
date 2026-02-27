import { player_state } from '../player_state.js';

export const save_manager = {
    save_slot_name: "thirteenth_cycle_v1",

    // Push current player_state to browser memory
    save() {
        try {
            const dataString = JSON.stringify(player_state);
            localStorage.setItem(this.save_slot_name, dataString);
            console.log("Saving Cycle: Data Synchronized.");
        } catch (error) {
            console.error("Save Failed: Reality collapse imminent.", error);
        }
    },

    // Pull data from browser memory and overwrite player_state
    load() {
        const savedData = localStorage.getItem(this.save_slot_name);
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            // We use Object.assign to update the existing state object
            Object.assign(player_state, parsedData);
            console.log("Loading Cycle: State Restored.");
            return true;
        }
        console.log("No previous Cycle found. Starting fresh.");
        return false;
    },

    // Delete the save (for a 'Hard Reset')
    wipe() {
        localStorage.removeItem(this.save_slot_name);
        location.reload(); // Refresh the game
    }
};
