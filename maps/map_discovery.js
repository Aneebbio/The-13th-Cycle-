export const discovery_table = {
    chance_nothing: 0.70, // 70% of tiles are empty space
    chance_resource: 0.20, // 20% have a small pile of scrap/ore
    chance_anomaly: 0.10, // 10% trigger a unique location file
    
    loot_pool: [
        { id: "iron_ore", min: 1, max: 10 },
        { id: "copper_wire", min: 2, max: 5 },
        { id: "old_battery", min: 1, max: 1 }
    ]
};
