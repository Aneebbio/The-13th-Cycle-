import { 
    icon_mine, 
    icon_windmill, 
    icon_archive, 
    icon_portal_dormant 
} from './symbols.js';

export const map_layout = {
    world_id: "cycle_13_prime",
    grid_bounds: { minX: 0, maxX: 100, minY: 0, maxY: 100 },
    
    // Core Exploration Nodes
    landmarks: [
        // --- STARTING AREA ---
        {
            id: "the_hub",
            name: "Origin Base",
            x: 50, y: 50,
            icon: "icon_base",
            is_visible: true,
            description: "Your central command unit."
        },

        // --- INDUSTRIAL NODES ---
        {
            id: "quarry_zone",
            name: "Limestone Quarry",
            x: 42, y: 58,
            icon: icon_mine,
            is_visible: true,
            resource_bonus: "limestone"
        },

        // --- ANCIENT ARCHIVES (The Fragment Hunt) ---
        {
            id: "archive_alpha",
            name: "The Sunken Library",
            x: 15, y: 12,
            icon: icon_archive,
            is_visible: false,
            requirement: "hazard_boots",
            reward: "address_fragment_01"
        },
        {
            id: "archive_beta",
            name: "The Radioactive Vault",
            x: 85, y: 88,
            icon: icon_archive,
            is_visible: false,
            requirement: "lead_exosuit",
            reward: "address_fragment_02"
        },

        // --- THE PORTAL NETWORK ---
        {
            id: "gate_central",
            name: "Warp Gate Prime",
            x: 55, y: 45,
            icon: icon_portal_dormant,
            is_visible: true,
            is_portal: true,
            connected_to: "gate_void", // Linked ID
            logic: "gate_activation.js"
        },
        {
            id: "gate_void",
            name: "Deep Space Gate",
            x: 500, y: 500, // Located way outside normal grid
            icon: icon_portal_dormant,
            is_visible: false,
            is_portal: true,
            connected_to: "gate_central"
        }
    ]
};
