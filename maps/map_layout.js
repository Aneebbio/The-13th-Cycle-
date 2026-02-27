import { icon_windmill, icon_mine } from './symbols.js';

export const map_layout = {
    world_name: "The 13th Sector",
    dimensions: { width: 100, height: 100 }, // Total grid size
    starting_coord: { x: 50, y: 50 },         // Where the player starts
    
    // Predetermined locations (Major Landmarks)
    landmarks: [
        {
            id: "home_base",
            name: "The Hub",
            x: 50, y: 50,
            icon: "icon_base",
            is_visible: true,
            file: "maps/hub_interior.js"
        },
        {
            id: "iron_barrens",
            name: "Iron Barrens",
            x: 52, y: 48,
            icon: icon_mine,
            is_visible: false, // Must be scanned to see
            file: "maps/wasteland_sector.js"
        },
        {
            id: "wind_plains",
            name: "The Breezeway",
            x: 45, y: 55,
            icon: icon_windmill,
            is_visible: false,
            file: "maps/wind_farm.js"
        }
    ]
};
