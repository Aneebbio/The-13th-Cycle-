// 1. Import all Modules
import * as Resources from './resources.js';
import { map_layout } from './maps/map_layout.js';
import { map_renderer } from './maps/renderer.js';
import { maintenance_depot } from './structures/maintenance_depot.js';
import { warp_gate } from './structures/warp_gate.js';
import { oxygen_tank_mk1 } from './equipment/oxygen_tank_mk1.js';
import { translation_matrix } from './equipment/translation_matrix.js';
import { dust_storm } from './events/dust_storm.js';
import { gate_activation } from './events/gate_activation.js';

// 2. The Central Game Database
export const Gamedata = {
    version: "1.0.0-Cycle-13",
    
    // Categorized Data
    resources: Resources,
    structures: {
        maintenance_depot,
        warp_gate
        // Add others here...
    },
    equipment: {
        oxygen_tank_mk1,
        translation_matrix
    },
    world: {
        layout: map_layout,
        renderer: map_renderer
    },
    events: {
        environmental: [dust_storm],
        logic: [gate_activation]
    }
};

// 3. Helper Function to "Get" anything by ID
export const getById = (id) => {
    return Gamedata.resources[id] || 
           Gamedata.structures[id] || 
           Gamedata.equipment[id];
};
