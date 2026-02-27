import { icon_base, icon_mine, icon_archive, icon_portal_dormant } from './symbols.js';

export const map_layout = {
    landmarks: [
        {
            id: "origin_hub",
            name: "The 13th Hub",
            x: 50, y: 50, // Center of the map
            icon: icon_base,
            is_visible: true,
            description: "Your starting survival pod."
        },
        {
            id: "iron_vein_alpha",
            name: "Iron Deposit",
            x: 30, y: 40,
            icon: icon_mine,
            is_visible: true,
            description: "Rich hematite detected."
        },
        {
            id: "ancient_archive_1",
            name: "Vault of the First Cycle",
            x: 80, y: 20,
            icon: icon_archive,
            is_visible: false, // Requires discovery or radar scan
            description: "Ancient data signatures detected."
        },
        {
            id: "warp_gate_primary",
            name: "Abandoned Star-Gate",
            x: 10, y: 90,
            icon: icon_portal_dormant,
            is_visible: true,
            description: "A massive ring of unknown alloy."
        }
    ]
};
