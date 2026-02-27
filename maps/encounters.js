export const wasteland_encounters = {
    zone: "iron_barrens",
    pool: [
        { chance: 0.5, event: "find_scrap", label: "You found 10x Steel Scraps!" },
        { chance: 0.3, event: "scavenger_ambush", label: "A rogue drone attacks!" },
        { chance: 0.2, event: "sandstorm", label: "Visibility reduced. Oxygen drain x2." }
    ]
};
